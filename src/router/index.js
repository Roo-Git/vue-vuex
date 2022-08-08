import { createRouter, createWebHashHistory } from "vue-router";
import BaseContainer from "../components/BaseContainer.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: BaseContainer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
