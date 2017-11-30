<template>
	<div class="tabFooter">
		<router-link tag="div" class="normal" to='/detail'>
			<span class="iconfont">&#xe664;</span>
			明细
		</router-link>
		<router-link tag="div" class="normal" to='/table'>
			<span class="iconfont">&#xe661;</span>
			图表
		</router-link>
		<div class="doCount" id="doCount">
			<span class="iconfont">&#xe629;</span>
			记账
		</div>
		<router-link tag="div" class="normal" to='/find'>
			<span class="iconfont">&#xe628;</span>
			发现
		</router-link>
		<router-link tag="div" class="normal" to='/mine'>
			<span class="iconfont">&#xe614;</span>
			我的
		</router-link>
	</div>
</template>
<script>

</script>
<style scoped>
	.tabFooter{
		height: 44px;
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		box-shadow: -2px 0 4px #f0f0f0;
		color: #757575;
		box-sizing: border-box;
		background: #fff;
	}
	.tabFooter div{
		text-align: center;
		font-size: 12px;
	}
	.iconfont{
		display: block;
		font-size: 18px;
		margin: 5px 0;
	}
	.tabFooter div.router-link-active{
		color: #272535;
	}
	.tabFooter div.router-link-active .iconfont{
		color: #ffda44;
	}
	.normal{
		flex: 2
	}
	.doCount{
		flex: 3;
		position: relative;
		padding-top: 28px;
	}
	.doCount .iconfont{
		position: absolute;
		width: 36px;
		height: 36px;
		border-radius: 18px;
		text-align: center;
		line-height: 36px;
		background: #ffda44;
		color: #272535;
		top: -18px;
		left: 50%;
		margin-left: -18px;
	}

</style>
