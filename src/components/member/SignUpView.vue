<template>
  <div class="sing-up-wrapper">
    <div class="sign-box">
      <div class="logo">BYULOG</div>
      <label>아이디</label>
      <el-input
          class="input-id input-box"
          v-model="id"
          input-box/>
      <label>비밀번호</label>
      <el-input
          class="input-id input-box"
          v-model="password"
          type="password"
          show-password
          input-box/>
      <label>비밀번호 확인</label>
      <el-input
          class="input-id input-box"
          v-model="passwordCheck"
          type="password"
          show-password
          input-box/>
      <label>이름</label>
      <el-input
          class="input-id input-box"
          v-model="name"
          input-box/>
      <label>휴대폰번호</label>
      <el-input
          class="input-id input-box"
          v-model="name"
          input-box/>
      <label>이메일</label>
      <el-input
          class="input-id input-box"
          v-model="name"
          input-box/>
      <label>주소</label>
      <el-input
          class="input-id input-box"
          v-model="name"
          input-box/>
      <input type="text" v-model="postCode" placeholder="우편번호">
      <input type="button" @click="showApi()" value="우편번호 찾기"><br>
      <input type="text" v-model="addr" placeholder="주소"><br>
      <input type="text" v-model="detailAddr" placeholder="상세주소">
      <input type="text" v-model="extraAddr" placeholder="참고항목">
      <AddressDialog></AddressDialog>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.sing-up-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}


.sign-box {
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


.sign-box > label {
  font-size: 13px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 8px;
  margin-right: auto;
}

.logo {
  margin-bottom: 20px;
}

.input-box {
  height: 40px;
  font-size: 15px;

}

</style>