<template>
  <div class="category-wrapper">
    <div class="info-title">🍕 Category info</div>
    <div class="category-main">
      <div class="category-box-wrapper">
        <div class="button-wrapper">
          <el-button style="color: white" color="#fdb814" @click="addCategory()"
            >카테고리 추가</el-button
          >
          <el-button style="color: white" color="#fdb814">삭제</el-button>
        </div>

        <div class="category-box">
          <div>🍦🍧카테고리</div>
          <el-tree
            ref="treeRef"
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            :data="data"
            :props="defaultProps"
            draggable
            default-expand-all
            node-key="id"
            :expand-on-click-node="false"
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            @node-click="nodeClick"
          >
            <template #default="{ node, data }">
              {{ node.data.title }}
              <span v-if="node.data.totalCnt != null">
                &nbsp({{ node.data.totalCnt }})</span
              >
            </template>
          </el-tree>
        </div>
      </div>
      <div class="category-info-wrapper">
        <div class="category-name">
          <div class="label">카테고리명</div>
          <el-input
            class="input-id input-box"
            style="width: 200px"
            input-box
            v-model="categoryInfo.title"
            placeholder="카테고리명을 입력하세요"
            :disabled="isSelect"
          />
        </div>
        <div class="public-yn">
          <div class="label">공개여부</div>
          <el-switch v-model="categoryInfo.publicYn" size="large" />
        </div>
      </div>
    </div>
    <div class="button-wrapper">
      <el-button style="color: white" color="#fdb814">취소</el-button>
      <el-button style="color: white" color="#fdb814">저장</el-button>
    </div>
  </div>
  <div>{{ data }}</div>
  <button @click="changeData">버튼</button>
  <button @click="test()">현재선택버튼</button>
</template>

<script setup lang="ts">
import type Node from "element-plus/es/components/tree/src/model/node";
import type { DragEvents } from "element-plus/es/components/tree/src/model/useDragNode";
import type { DropType } from "element-plus/es/components/tree/src/tree.type";
import blogApi from "@/api/modules/blogApi";
import { Category } from "@/types/category";
import { computed } from "vue";

const treeRef = ref();

//처음진입시 노드 선택 여부
const selectedNode = ref<object>({ isSelect: false, currentNode: "" });

const categoryInfo = ref<Category>(new Category());

const nodeClick = (node: any) => {
  categoryInfo.value = node;

  //  7/19 여기서부터 찍어보기
  //selectedNode.value.isSelect = false;
};

const test = () => {
  console.dir(categoryInfo.value);
};

const addCategory = () => {
  //먼저 데이터 다시 세팅
  changeData();
  const newCategory: Category = {
    title: "새 카테고리",
    totalCnt: 0,
    isSelect: true,
  };
  //data.value[0].children.push(newCategory);
  categoryInfo.value = newCategory;
  const rootNode: Node = treeRef.value.getNode("all");
  treeRef.value.append(newCategory, rootNode);
  isSelect.value = false;
};

const defaultProps = {
  children: "children",
  label: "label",
};

//처음 드래그 시작했을때
const handleDragStart = (node: Node, ev: DragEvents) => {};

//다른 노드 위에 진입했을때
const handleDragEnter = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {};

//다른 노드위에서 떠났을때
const handleDragLeave = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {};

//다른 노드 위에 올라갔을떄
const handleDragOver = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {};

//드래그를 끝냈을때
const handleDragEnd = (
  draggingNode: Node,
  dropNode: Node,
  dropType: DropType,
  ev: DragEvents
) => {};

//다른데다 놨을 때 (같은곳에 놓을 경우 동작안함)
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: DropType,
  ev: DragEvents
) => {};

//요소 드롭 허용 여부
const allowDrop = (draggingNode: Node, dropNode: Node, type: DropType) => {
  if (dropNode.level >= 3 && type == "inner") {
    return false;
  }
  //만약 내려놓을 자리가 1이라면?
  if (dropNode.level == 1) {
    return false;
  }
  //만약 선택한 노드가 1 이고, 내려놓을 자리가 2라면?
  if (dropNode.level > draggingNode.level) {
    return draggingNode.childNodes.length == 0;
  }
  return true;
};

//요소 드래그 허용 여부
const allowDrag = (draggingNode: Node) => {
  return true;
};

const data = ref();

const findCategory = async () => {
  const res = await blogApi.findCategory();
  data.value = [{ title: "전체보기", children: res, id: "all" }];
};

//sort 세팅해서 다시보내기/ 바뀜 여부만....흠.........??
const changeData = () => {
  _.forEach(data.value, (parent, index) => {
    parent.upCategory = null;
    _.forEach(parent.children, (child, index) => {
      child.upCategory = parent.categorySeq;
      child.sort = index + 1;
    });
  });
};

findCategory();
</script>

<style scoped>
.category-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 60px 0;
}

.category-main {
  display: flex;
}

.category-box-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 20px 20px;
}

.button-wrapper {
  margin: 15px 0;
}

.category-box {
  border: solid #eaeaea thin;
  padding: 20px;
  width: 280px;
  border-radius: 4px;
}

.category-info-wrapper {
  padding-top: 75px;
  margin-left: 30px;
}

.category-info-wrapper > * {
  display: flex;
  margin: 10px 0px;
}

.label {
  width: 130px;
  font-weight: bold;
  font-size: 16px;
  padding-top: 2px;
}
</style>
