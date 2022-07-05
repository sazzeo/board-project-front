<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="logo">BYULOG</div>
      <el-input
          class="input-id input-box"
          v-model="id"
          placeholder="아이디를 입력하세요" input-box/>
      <el-input
          class="input-password input-box "
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          show-password
      />
      <el-button
          class="btn-login"
          color="#fdb814"
      >로그인</el-button>
      <div class="btn-group">
        <el-button
            class="btn-sign"
            link
        >아이디 찾기</el-button>
        <el-button
            class="btn-sign"
            link
        >비밀번호 찾기</el-button>
        <el-button
            class="btn-sign"
            link
        >회원가입</el-button>
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

<script>

</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 400px;
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

.input-box
{
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
  font-size:16px;
}

.or-line {
  display: flex;
  margin-top: 30px;
}

.or-line > * {
  color : rgba(0,0,0,0.3);
}

.line {
  width: 173px;
  background-color: rgba(0,0,0,0.3);
}

.or {
  margin: 0 10px;
  font-size:13px;
}

</style>