import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index.vue";

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originPush.call(this, location).catch(err => err);
}
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      ignoreAuth: true
    }
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import(/* webpackChunkName: "detail" */ "@/views/detail.vue"),
    meta: {
      ignoreAuth: true
    }
  },
  {
    path: "/sub/:id(\\d+)(.*)?",
    name: "sub",
    component: () => import(/* webpackChunkName: "sub" */ "@/views/sub.vue"),
    meta: {
      ignoreAuth: true
    },
    props: true
  },
];

const createRouter = () => {
  let router = new VueRouter({
    mode: "history",
    routes
  });
  return router;
};

const router = createRouter();

export default router;
