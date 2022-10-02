<template>
  <div>
    <el-form
      :model="user"
      :rules="rules"
      ref="typeFormRef"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
interface User {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const user = reactive<User>({
      username: "",
      password: "",
    });
    let rules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    let typeFormRef = ref(null);
    function onSubmit() {
      (typeFormRef.value as any).validate((valid: User) => {
        console.log(valid);
        if (valid) {
          console.log(user);
          console.log(user.username);
        } else {
          return false;
        }
      });
    }

    return {
      onSubmit,
      typeFormRef,
      rules,
      user,
    };
  },
});
</script>

<style scoped>
</style>