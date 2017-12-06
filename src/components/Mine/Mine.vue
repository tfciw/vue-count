<template>
	<div>
		<div class="head_info">
		<a href="javascript:;" class="photo">
			<img src="../../common/images/rock.jpg" alt="">
		</a>
		<p class="name">tfciw</p>
		<div class="head_bot">
			<ul>
				<li>
					<span>0</span>
					<p>已连续打卡</p>
				</li>
				<li>
					<span>4</span>
					<p>记账总天数</p>
				</li>
				<li>
					<span>8</span>
					<p>记账总笔数</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="detail">
		<Clear></Clear>
		<Mineitem link="/mine" content="类别设置" iconfont="icon-fenlei"></Mineitem>
		<Clear></Clear>
		<Mineitem link="/mine" content="类别设置" iconfont="icon-fenlei"></Mineitem>
		<Mineitem link="/mine" content="类别设置" iconfont="icon-fenlei"></Mineitem>
	</div>
	</div>
</template>
<script>
import Clear from '@/components/Clear/Clear'
import Mineitem from '@/components/Mineitem/Mineitem'
export default {
	components: {
		Clear,
		Mineitem
	}
}
</script>
<style scoped>
	.head_info{
		background: #ffda44;
		padding-top: 30px;
		font-size: 12px;
	}
	.photo{
		width: 60px;
		height: 60px;
		display: block;
		margin: 0 auto 10px;
		border-radius: 30px;
		overflow: hidden;
	}
	.photo img{
		width: 100%;
		height: 100%;
	}
	.name{
		text-align: center;
		color: #343233;
		font-weight: 600;
		margin-bottom: 10px;
	}
	ul{
		display:-webkit-box;
	}
	li{
		-webkit-box-flex:1.0;
		text-align: center;
		color: #716538;
		padding: 10px 0;
		line-height: 24px;
		font-size: 12px;
	}
	li span{
		color: #343233;
		font-size: 18px;
	}
</style>
