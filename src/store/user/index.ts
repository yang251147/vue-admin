import { defineStore } from "pinia";
import { reactive } from "vue";

const userCounter = defineStore("user", {
  state: () =>
    reactive({
      name: "ly",
      age: 99,
      role: "admin",
    }),
  getters: {
    doubleCounter(state) {
      return state.age * 2;
    },
  },
});
export default userCounter;
