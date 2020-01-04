import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Home.vue")
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue")
	},
	{
		path: "/skills",
		name: "skills",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Skills.vue")
	},
	{
		path: "/projects",
		name: "projects",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Projects.vue")
	},
	{
		path: "/contact",
		name: "contact",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Contact.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
