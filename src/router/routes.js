const routes = [
	{
		path: "/",
		component: () => import("src/layouts/MenuBar.vue"),
		children: [
			{ path: "", component: () => import("src/pages/PlanScreen.vue") },
			{
				path: "/map",
				component: () => import("src/pages/MapScreen.vue"),
			},
			{
				path: "/order",
				component: () => import("src/pages/OrderScreen.vue"),
			},
			{
				path: "/profile",
				component: () => import("src/pages/UserProfile.vue"),
			},
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
	{
		path: "/Register",
		component: () => import("pages/RegisterScreen.vue"),
	},
];

export default routes;
