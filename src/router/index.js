import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/:slug",
    name: "sections",
    component: () => import("@/views/Section"),
    props: (route) => ({ ...route.params }),
    children: [
      {
        path: ":locationSlug",
        name: "location.show",
        component: () => import("@/views/Places"),
        props: (route) => ({ ...route.params }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
