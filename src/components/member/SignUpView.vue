<template>
  <div class="sing-up-wrapper">
    <div class="sign-box">
      <div class="logo">BYULOG</div>
      <label>아이디</label>
      <el-input
        class="input-id input-box"
        v-model="member.id"
        input-box
        @focusout="idCheck()"
      />
      <div class="message" v-if="message.id.view">{{ message.id.label }}</div>
      <label>비밀번호</label>
      <el-input
        class="input-id input-box"
        v-model="member.password"
        type="password"
        show-password
        input-box
      />
      <label>비밀번호 확인</label>
      <el-input
        class="input-id input-box"
        v-model="passwordCheck"
        type="password"
        show-password
        input-box
        @keyup="passwordCheckFn"
      />
      <div class="message" v-if="message.password.view">
        {{ message.password.label }}
      </div>
      <label>이름</label>
      <el-input class="input-id input-box" v-model="member.name" input-box />
      <label>휴대폰번호</label>
      <el-input class="input-id input-box" v-model="member.phone" input-box />
      <label>이메일</label>
      <el-input
        class="input-id input-box"
        v-model="member.email"
        input-box
        type="email"
      />
      <el-button class="sign-btn" type="primary" @click="signUp" color="#fdb814"
        >가입하기</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Member } from "@/types/member";
import memberApi from "@/api/modules/memberApi";
import { ElMessage } from "element-plus";

const member = ref<Member>({
  id: "",
  password: "",
  name: "",
  phone: undefined,
  email: "",
});

const message = ref<any>({
  id: {
    label: "이미 사용중인 아이디 입니다.",
    view: false,
  },
  password: {
    label: "비밀번호가 일치하지 않습니다.",
    view: false,
  },
});

const passwordCheck = ref<string>("");

const idCheck = async () => {
  const res = await memberApi.idCheck(member.value.id);
  message.value.id.view = res > 0 ? true : false;
};

const passwordCheckFn = () => {
  message.value.password.view =
    member.value.password != passwordCheck.value ? true : false;
};

const isMemberEmpty = (): boolean => {
  let res = false;
  _.forEach(member.value, (e) => {
    if (!e) {
      res = true;
      return;
    }
  });
  if (!passwordCheck.value) {
    return true;
  }
  return res;
};

const isMemberValid = (): boolean => {
  let res = false;
  _.forEach(message.value, (e) => {
    if (e.view) {
      res = true;
    }
    return;
  });
  return res;
};

const signUp = async () => {
  if (isMemberEmpty()) {
    ElMessage("빈칸을 모두 입력해주세요.");
    return;
  }
  if (isMemberValid()) {
    ElMessage("유효한 값을 입력해주세요.");
    return;
  }
  try {
    const res = await memberApi.addMember(member.value);
    alert("가입되었습니다.");
    await $router.push("/login");
  } catch (e: any) {
    ElMessage(e.message[0].label);
  }
};
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

.message {
  width: 100%;
  font-size: 12px;
  color: red;
  margin-top: 5px;
}

.input-box {
  height: 40px;
  font-size: 15px;
}

.sign-btn {
  font-weight: bold;
  margin-top: 40px;
}
</style>
