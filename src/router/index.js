import Vue from 'vue'
import Router from 'vue-router'
import resetCss from 'reset-css'
import mainCss from '@/common/css/main.css'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Table from '@/components/Table'
import Find from '@/components/Find'
import Details from '@/data/details.json'
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
