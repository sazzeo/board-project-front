<template>
  <div class="category-wrapper">
    <div class="button-wrapper">
      <el-button style="color: white" color="#fdb814" @click="addNode()"
        >카테고리 추가</el-button
      >
      <el-button style="color: white" color="#fdb814">삭제</el-button>
    </div>
    <div class="category-box">
      <div>🍦🍧카테고리</div>

      <el-tree
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
        @node-click="selectNode"
      >
        <template #default="{ node, data }">
          {{ node.data.title }}
        </template>
      </el-tree>
    </div>
    <div>{{ data }}</div>
    <button @click="changeData">버튼</button>
  </div>
</template>

<script setup lang="ts">
import type Node from "element-plus/es/components/tree/src/model/node";
import type { DragEvents } from "element-plus/es/components/tree/src/model/useDragNode";
import type { DropType } from "element-plus/es/components/tree/src/tree.type";
import blogApi from "@/api/modules/blogApi";

const selectNode = (node: Node) => {
  selectedNode.value = node;
};

//현재 선택된 노드뽑기
const selectedNode = ref<Node>();

const addNode = () => {
  changeData(); //추가전 정렬 시키기
  console.dir(selectedNode.value);
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
  if (dropNode.level >= 2 && type == "inner") {
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
  data.value = res;
  console.dir(res);
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

const addCategory = () => {};

findCategory();
</script>

<style scoped>
.category-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.button-wrapper {
  width: 230px;
}

.category-box {
  border: solid black thin;
  margin: 20px;
  padding: 20px;
}
</style>
