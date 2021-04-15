import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/modules/home/views/Home.vue';
import Films from '@/modules/films/views/Films.vue';
import About from '@/modules/about/views/About.vue';
import Contact from '@/modules/contact/views/Contact.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		meta: {
			title: 'About',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		meta: {
			title: 'Contact',
		},
	},
	{
		path: '/films',
		name: 'Films',
		component: Films,
		meta: {
			title: 'Films',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.afterEach((to) => {
	document.title = (to.meta.title && `Judie - ${to.meta.title}`) || 'Judie';
});

export default router;
