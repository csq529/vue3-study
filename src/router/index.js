
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ref",
    name: "Ref",
    component: () => import(/* webpackChunkName: "ref" */ "../views/ref.vue"),
  },
  {
    path: "/reactive",
    name: "Reactive",
    component: () => import(/* webpackChunkName: "reactive" */ "../views/reactive.vue"),
  },
  {
    path: "/watch",
    name: "Watch",
    component: () => import(/* webpackChunkName: "watch" */ "../views/watch.vue"),
  },
  {
    path: "/computed",
    name: "Computed",
    component: () => import(/* webpackChunkName: "computed" */ "../views/computed.vue"),
  },
  {
    path: "/parent-child",
    name: "Parent",
    component: () => import(/* webpackChunkName: "Parent" */ "../views/Parent.vue"),
  },
  {
    path: "/life-cycle",
    name: "LifeCycle",
    component: () => import(/* webpackChunkName: "LifeCycle" */ "../views/LifeCycle.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
