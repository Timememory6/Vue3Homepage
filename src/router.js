import { createRouter, createWebHistory } from "vue-router";
import MyHome from "./components/pages/MyHome.vue";
import MyAbacus from "./components/pages/MyAbacus.vue";
import MyCareer from "./components/pages/MyCareer.vue";

const routes = [
  { path: "/", name: "Home", component: MyHome },
  { path: "/abacus", name: "Abacus", component: MyAbacus },
  { path: "/career", name: "Career", component: MyCareer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
