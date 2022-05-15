import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
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
    beforeEnter(to) {
      const exist = sourceData.sections.find(
        (section) => section.slug === to.params.slug
      );
      if (!exist)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":locationSlug",
        name: "location.show",
        component: () => import("@/views/Places"),
        props: (route) => ({
          ...route.params,
        }),
        beforeEnter(to) {
          const exist = sourceData.sections.find(
            (section) =>
              section.slug === to.params.slug &&
              section.locations.find(
                (location) => location.slug === to.params.locationSlug
              )
          );
          if (!exist)
            return {
              name: "NotFound",
              params: { pathMatch: to.path.split("/").slice(1) },
              query: to.query,
              hash: to.hash,
            };
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
