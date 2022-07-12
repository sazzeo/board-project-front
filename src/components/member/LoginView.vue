<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="logo">BYULOG</div>
      <el-input
        class="input-id input-box"
        v-model="member.id"
        placeholder="아이디를 입력하세요"
        input-box
      />
      <el-input
        class="input-password input-box"
        v-model="member.password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        show-password
      />
      <el-button class="btn-login" color="#fdb814" @click="loginMember"
        >로그인</el-button
      >
      <div class="btn-group">
        <el-button link>아이디 찾기</el-button>
        <el-button link>비밀번호 찾기</el-button>
        <el-button link @click="goSignup">회원가입</el-button>
      </div>
      <div class="or-line">
        <div class="line"></div>
        <div class="or">또는</div>
        <div class="line"></div>
      </div>
      <div>소셜로그인</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginMember } from "@/types/member";
import memberApi from "@/api/modules/memberApi";
import { auth } from "@/stores/modules/auth";

/*변수 선언*/
const member = ref<LoginMember>({
  id: "",
  password: "",
});

/*함수 선언*/
const loginMember = async () => {
  //받고나서 헤더셋팅
  const res = await memberApi.loginMember(member.value);
  const authToken = res.data;
  auth().setAuthToken(authToken);
};

const goSignup = () => {
  $router.push("/signup");
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 420px;
  margin: 100px 0px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  box-shadow: 0 3px 3px #fafafa;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-box > * {
  margin: 8px 0;
}

.logo {
  margin-bottom: 20px;
}

.input-box {
  height: 40px;
  font-size: 20px;
}

.btn-login {
  width: 100%;
  height: 45px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
}

.btn-group {
  display: flex;
  justify-content: right;
  width: 100%;
}

.btn-sign {
  font-size: 16px;
}

.or-line {
  display: flex;
  margin-top: 30px;
}

.or-line > * {
  color: rgba(0, 0, 0, 0.3);
}

.line {
  width: 150px;
  background-color: rgba(0, 0, 0, 0.3);
}

.or {
  margin: 0 5px;
  font-size: 13px;
  width: 26px;
}
</style>
