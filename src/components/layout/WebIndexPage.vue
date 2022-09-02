<template>
  <div class="index-wrapper">
    <el-card>
      <el-row>
        <el-col class="mb-2 pr-2">
          <div class="flex justify-between">
            <div class="text-xl font-bold ml-3 leading-10">청소 관리</div>
            <div>
              <el-button type="primary">
                청소 타입 추가<el-svg-icon name="plus" class="ml-1" />
              </el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="6" v-for="(l, index) of list" :key="index">
          <div class="card">
            <div class="card-header">
              <div class="name">
                <el-button plain size="small" class="font-bold">
                  <div class="text-lg">{{ l.title }}</div>
                </el-button>
              </div>
              <el-tooltip
                class="item"
                effect="dark"
                content="수정"
                placement="top"
              >
              </el-tooltip>
            </div>
            <div class="card-body">
              <div
                class="flex justify-between"
                style="padding: 5px 12px; align-items: center"
              >
                <div class="rank">점수</div>
                <div class="member-name">{{ l.score }}점</div>
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
  { title: "로청+쓰레기", score: 10 },
  { title: "바닥", score: 20 },
  { title: "손걸레", score: 5 },
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
  border-bottom: solid #ebeef5 thin;
  background-color: #fdb814;
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
  padding: 10px 0px;
}

.ranking {
  display: flex;
  justify-content: space-between;
  padding: 5px 12px;
}

.member-name {
  font-size: 20px;
}
</style>
