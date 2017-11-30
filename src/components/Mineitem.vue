<template>
	<router-link class="item" :to="link">
		<span class="iconfont" :class="iconfont"></span>
		{{content}}
		<span class="arrow iconfont icon-prev-copy"></span>
	</router-link>
</template>
<script>
export default {
	props: {
		iconfont: {
			type: String
		},
		content: {
			type: String
		},
		link: {
			type: String
		}
	}
}
</script>
<style scoped>
	.item{
		display: block;
		color: #343233;
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
		background: #fff;
		border-bottom: 1px solid #ebebeb;
	}
	.iconfont{
		margin-right: 12px;
		color: #ffda44;
	}
	.arrow{
		float: right;
		color: #343233;
	}
</style>
