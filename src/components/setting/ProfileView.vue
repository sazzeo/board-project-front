<template>
  <div class="profile-wrapper">
    <div class="profile-box">
      <div class="profile-info-wrapper">
        <div class="info-title">🍊사용자 설정</div>
        <div class="id-wrapper">
          <div class="label">아이디</div>
          <div class="id">{{ member.id }}</div>
        </div>
        <div class="password-wrapper">
          <div class="label">비밀번호</div>
          <el-input
            class="input-id input-box"
            v-model="member.password"
            style="width: 200px"
            input-box
          />
          <el-button
            class="btn-update"
            color="#fdb814"
            @click="modifyMember('password', member.password)"
            >수정</el-button
          >
        </div>
        <div class="name-wrapper">
          <div class="label">이름</div>
          <el-input
            class="input-id input-box"
            v-model="member.name"
            style="width: 120px"
            input-box
          />
          <el-button
            class="btn-update"
            color="#fdb814"
            @click="modifyMember('name', member.name)"
            >수정</el-button
          >
        </div>
        <div class="email-wrapper">
          <div class="label">이메일</div>
          <div class="id">{{ member.email }}</div>
        </div>
      </div>
      <div class="blog-info-wrapper">
        <div class="info-title">🍊블로그 설정</div>
        <div class="title-wrapper">
          <div class="label">블로그 제목</div>
          <el-input
            class="input-id input-box"
            v-model="member.title"
            input-box
          />
          <el-button
            class="btn-update"
            color="#fdb814"
            @click="modifyBlog('title', member.title)"
            >수정</el-button
          >
        </div>
        <div class="sub-title-wapper">
          <div class="label">블로그 설명</div>
          <el-input
            class="input-box"
            v-model="member.subTitle"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
          <el-button
            class="btn-update"
            color="#fdb814"
            @click="modifyBlog('subTitle', member.subTitle)"
            >수정</el-button
          >
        </div>
        <div class="tag-yn-wrapper">
          <div class="label">태그 사용 여부</div>
          <el-switch
            v-model="member.tagYn"
            size="large"
            @change="modifyBlog('tagYn', member.tagYn)"
          />
        </div>
        <div class="tag-min-wrapper">
          <div class="label">태그 노출 기준</div>
          <el-input
            class="input-id input-box"
            type="number"
            v-model="member.tagMin"
            input-box
            :disabled="!member.tagYn"
            style="width: 60px; margin-right: 10px"
          />
          <div class="label" style="width: 140px">개 부터 표시하기</div>
          <el-button
            class="btn-update"
            color="#fdb814"
            :disabled="!member.tagYn"
            @click="modifyBlog('tagMin', member.tagMin)"
            >수정</el-button
          >
        </div>
        <div class="tag-cardinal-wrapper">
          <div class="label">태그 표시 개수</div>
          <el-input
            class="input-id input-box"
            type="number"
            v-model="member.tagCardinal"
            :disabled="!member.tagYn"
            input-box
            style="width: 60px; margin-right: 10px"
          />
          <div class="label" style="width: 70px">개 까지</div>
          <el-button
            class="btn-update"
            color="#fdb814"
            :disabled="!member.tagYn"
            @click="modifyBlog('tagCardinal', member.tagCardinal)"
            >수정</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogApi from "@/api/modules/blogApi";
import type { BlogMember } from "@/types/blog";
import MemberApi from "@/api/modules/memberApi";
import { computed } from "vue";
import { ElMessage } from "element-plus";

const member = ref<BlogMember>({
  id: "",
  name: "",
  password: "",
  email: "",
  title: "",
  subTitle: "",
  tagMin: 0,
  tagCardinal: 0,
  tagYn: false,
});

const findUserBlogProfile = async () => {
  const res = await BlogApi.findUserBlogProfile();
  member.value = res;
};

const modifyMember = async (key: string, value: any) => {
  const data: Record<string, any> = {};
  data[key] = value;
  try {
    const res = await MemberApi.modifyMember(data);
    open();
  } catch (e) {
    //
  }
};

const open = () => {
  ElMessage("수정되었습니다.");
};

const modifyBlog = async (key: string, value: any) => {
  const data: Record<string, any> = {};
  data[key] = value;
  try {
    const res = await BlogApi.modifyBlog(data);
    open();
  } catch (e) {
    //
  }
};

findUserBlogProfile();
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
