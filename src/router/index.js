import Vue from "vue";
import VueRouter from "vue-router";
import ProductView from "../views/ProductView.vue";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: ProductView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
