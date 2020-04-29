import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//
import Detail from "../views/detail";

//JsUI
import Index from "../views/JsUI/index";
import ButtonDemo from "../views/JsUI/packages/ButtonDemo";
import RadioDemo from "../views/JsUI/packages/RadioDemo";

//Mongoose
import MonDemo1 from "../views/Mongo/MonDemo1";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/Index",
    name: "Index",
    component: Index,
  },
  //JsUI
  {
    path: "/ButtonDemo",
    name: "ButtonDemo",
    component: ButtonDemo,
  },
  {
    path: "/RadioDemo",
    name: "RadioDemo",
    component: RadioDemo,
  },
  //Mongoose
  {
    path: "/MonDemo1",
    name: "MonDemo1",
    component: MonDemo1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  next();
});
