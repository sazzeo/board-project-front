<template>
  <div class="profile-wrapper">
    <div class="profile-box">
      <div class="profile-info-wrapper">
        <div class="info-title">🍊사용자 설정</div>
        <div class="id-wrapper">
          <div class="label">아이디</div>
          <div class="id">사용자아이디</div>
        </div>
        <div class="password-wrapper">
          <div class="label">비밀번호</div>
          <el-input class="input-id input-box" v-model="id" input-box />
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
        <div class="name-wrapper">
          <div class="label">이름</div>
          <el-input class="input-id input-box" v-model="id" input-box />
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
        <div class="email-wrapper">
          <div class="label">이메일</div>

          <div class="id">사용자이메일</div>
        </div>
      </div>
      <div class="blog-info-wrapper">
        <div class="info-title">🍊블로그 설정</div>
        <div class="title-wrapper">
          <div class="label">블로그 제목</div>
          <el-input class="input-id input-box" v-model="id" input-box />
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
        <div class="sub-title-wapper">
          <div class="label">블로그 설명</div>
          <el-input
            class="input-box"
            v-model="textarea"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
        <div class="tag-yn-wrapper">
          <div class="label">태그 사용 여부</div>
          <el-switch v-model="tagYn" size="large" />
        </div>
        <div class="tag-min-wrapper">
          <div class="label">태그 노출 기준</div>
          <el-input
            class="input-id input-box"
            type="number"
            v-model="num"
            input-box
            style="width: 60px; margin-right: 10px"
          />
          <div class="label" style="width: 70px">개 부터</div>
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
        <div class="tag-cardinal-wrapper">
          <div class="label">태그 표시 개수</div>
          <el-input
            class="input-id input-box"
            type="number"
            v-model="num"
            input-box
            style="width: 60px; margin-right: 10px"
          />
          <div class="label" style="width: 70px">개 까지</div>
          <el-button class="btn-update" color="#fdb814">수정</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const num = ref();
const tagYn = ref<boolean>(true);
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-box {
  margin: 50px;
  width: 900px;
  padding: 30px;
}
.profile-info-wrapper {
  border-bottom: solid #b5b5b5 1px;
}

.info-title {
  font-weight: bold;
  font-size: 20px;
}

.profile-box > * {
  margin: 30px 0px;
}

/*전체라인들*/
.profile-box > * > * {
  display: flex;
  align-items: flex-start;
  margin: 20px 0px;
}

.label {
  width: 130px;
  font-weight: bold;
  font-size: 16px;
  padding-top: 2px;
}

.input-box {
  width: 400px;
  margin-right: 20px;
}
</style>
