<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <el-form
          :model="userForm"
          :rules="rules"
          ref="typeFormRef"
          label-width="80px"
          :inline="false"
          size="normal"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="userForm.username" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="userForm.password"
              size="small"
              type="password"
            ></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="24">
              <el-button @click="onSubmit" class="btn">登录</el-button></el-col
            >
          </el-row>
        </el-form>
      </div>
      <div class="msg">
        Don't have account?
        <a href="./#/register">注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { localGet, localSet } from "@/utils/index";
import { useRouter } from "vue-router";
interface User {
  username: string;
  password: string;
}

export default defineComponent({
  setup() {
    const userForm = reactive<User>({
      username: "",
      password: "",
    });
    let rules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 5, max: 20, message: "账号长度5-20之间", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "账号长度6-20之间", trigger: "blur" },
      ],
    };
    let typeFormRef = ref(null);
    function onSubmit() {
      (typeFormRef.value as any).validate((valid: User) => {
        console.log(valid);
        if (valid) {
          console.log(userForm);
          console.log(userForm.username);
          //localSet(userForm.username, userForm);
          $router.push({ path: "/home" });
        } else {
          return false;
        }
      });
    }

    const $router = useRouter();
    function isLogin() {
      if (localGet(userForm.username)) {
        $router.push({ path: "/computed" });
      }
    }

    function cancel() {
      userForm.password = "";
      userForm.username = "";
    }
    return {
      isLogin,
      onSubmit,
      cancel,
      typeFormRef,
      rules,
      userForm,
    };
  },
});
</script>

<style scoped>
.container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
