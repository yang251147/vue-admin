<template>
  <el-card>
    <h3>Home Dashboard</h3>
    <h3>count :{{ counterStore.age }}</h3>
    <h3>getters :{{ counterStore.doubleCounter }}</h3>
    <h3>name :{{ counterStore.name }}</h3>
    <el-button @click="add">增加</el-button>
    <el-button @click="edit">修改</el-button>
  </el-card>
</template>

<script lang="ts">
import userCounter from "../store/user";
import userStore from "../store/"
export default {
  setup() {
    const counterStore = userCounter();
    console.log(counterStore);
    
    const add = () => {
      counterStore.age++;
      console.log(counterStore.doubleCounter);
      counterStore.$patch({  //改变状态
        age: counterStore.age - 2,   
        name: "Abalam",
      });
    };

    const edit = () => {
      counterStore.$state = { age: 23, name: "Paimon" };  //替换状态
    };
    return { counterStore, add, edit };
  },
};
</script> 