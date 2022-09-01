<template>
  <div class="index-wrapper">
    <el-card>
      <el-row>
        <el-col class="mb-2 pr-2">
          <div class="flex justify-between">
            <div class="text-xl font-bold ml-3 leading-10">카테고리</div>
            <div>
              <el-button type="primary" @click="openDialog(null, false, false)">
                카테고리 추가<el-svg-icon name="plus" class="ml-1" />
              </el-button>
            </div>
          </div>
        </el-col>
        <el-col class="mr-8" :span="4" v-for="l of list">
          <div class="card">
            <div class="card-header">
              <div class="name">
                {{ l.title }}
              </div>
              <el-tooltip
                class="item"
                effect="dark"
                content="수정"
                placement="top"
              >
                <div class="score">{{ l.score }}점</div>
              </el-tooltip>
            </div>
            <div class="card-body">
              <div class="ranking" v-for="(rank, index) of ranking">
                <div class="rank">{{ rankingIcon[index] }}</div>
                <div class="member-name">
                  {{ rank }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const list = ref<Array<any>>([
  { title: "로봇청소기", score: 5 },
  { title: "쓰레기", score: 5 },
  { title: "설거지", score: 20 },
  { title: "손걸레", score: 5 },
  { title: "분리수거", score: 10 },
]);

const ranking = ref<Array<string>>(["임지영", "임지영", "임지영"]);
const rankingIcon = ref<Array<string>>(["🥇", "🥈", "🥉"]);
</script>

<style scoped>
.index-wrapper {
  width: 1300px;
  border: black solid thin;
}

.card {
  border: 1px solid #ebeef5;
  border-radius: 5px;
  background-color: #ffffff;
  color: #303133;
  transition: 0.3s;
  margin: 10px;
}

.card-header {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  font-size: 18px;
  color: #333333;
}
.score {
  background-color: #409eff;
  width: 50px;
  text-align: center;
  color: white;
  font-size: 16px;
}
.card-body {
  display: flex;
  flex-direction: column;
}

.ranking {
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
}
</style>
