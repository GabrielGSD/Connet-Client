const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MenuBar.vue"),
    children: [
      { path: "", component: () => import("pages/PageTwo.vue") },
      { path: "/page", component: () => import("pages/IndexPage.vue") },
      { path: "/order", component: () => import("pages/PageThree.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/Login",
    component: () => import("pages/LockScreen.vue"),
  },
];

export default routes;
