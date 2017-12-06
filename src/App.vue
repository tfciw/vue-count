<template>
	<div id="app">
		<div id="main">
			<transition :name="'pop-' + (direction === 'forward' ? 'in' : 'out')">
				<router-view class="router-view"></router-view>
			</transition>
		</div>
		<tab-footer></tab-footer>
		<Count @refresh="refresh"></Count>
	</div>
</template>

<script>
import tabFooter from '@/components/TabFooter/TabFooter'
import Count from '@/components/Count/Count'
import { fullScreen } from '@/common/js/dom'
export default {
	components: {
		tabFooter,
		Count
	},
	mounted: function() {
		fullScreen()
	},
	computed: {
		direction() {
			return this.$store.state.vux.direction
			// return 'out'
		}
	},
	methods: {
		refresh() {
			location.reload()
		}
	}
}
</script>

<style>
	
</style>
