import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../layout/index.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: Layout,
    children: [
      {
        path: "info",
        name: "About",
        component: () => import("../views/About.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("../views/Login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/admin/"),
  routes,
});
// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     next('/login')
// })
export default router;
