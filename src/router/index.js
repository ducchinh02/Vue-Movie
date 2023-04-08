import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: import(/*webpackChunkName : "home" */ "../views/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: import(
      /*webpackChunkName : "movie detail" */ "../views/MovieDetail.vue"
    ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: import(
      /*webpackChunkName : "page not found" */ "../views/404.vue"
    ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
