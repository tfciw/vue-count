<template>
	<div id="app">
		<div id="main">
			<router-view></router-view>
		</div>
		<tab-footer></tab-footer>
		<Count></Count>
	</div>
</template>

<script>
import tabFooter from '@/components/tabFooter'
import Count from '@/components/Count'
import { fullScreen } from '@/common/js/dom'
export default {
	components: {
		tabFooter,
		Count
	},
	mounted: function() {
		fullScreen()
	}
}
</script>

<style>

</style>
