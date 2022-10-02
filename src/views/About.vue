<template>
  <div> 
      {{ num }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";
export default defineComponent({
  setup() {
    const num = store.state.count;
    console.log(num);
    
    return {
      num,
    };
  },
});
</script>

<style scoped>
</style>