import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/analitics",
    name: "analitics",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/webMaster",
    name: "webMaster",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/requests",
    name: "requestsWebMaster",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/url",
    name: "urlWebMaster",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/liveSearch",
    name: "liveSearch",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/project",
    name: "project",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/setting/account",
    name: "settingAccount",
    component: HomeView,
    meta: { layout: "main" },
  },
  {
    path: "/accessmanagement",
    name: "accessManagement",
    component: HomeView,
    meta: { layout: "main" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
