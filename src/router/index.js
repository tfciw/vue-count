import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine/Mine'
import Detail from '@/components/Detail/Detail'
import Table from '@/components/Table/Table'
import Find from '@/components/Find/Find'
Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/detail'
		},
		{
			path: '/detail',
			component: Detail
		},
		{
			path: '/table',
			component: Table
		},
		{
			path: '/find',
			component: Find
		},
		{
			path: '/mine',
			component: Mine
		}
	]
})
