<template>
	<div>
		<div id="details">
			<p class="name">{{name}}</p>
			<div class="head_bar">
				<div class="date">
					<p class="year">2017年</p>
					<div class="month_box">
						<span class="month">10</span>月
						<span class="iconfont">&#xe67f;</span>
					</div>
				</div>
				<div class="in_out">
					<div class="in">
						<p class="title">收入</p>
						<p class="num">
							<span class="int">650</span>
							<span class="float">.00</span>
						</p>
					</div>
					<div class="out">
						<p class="title">支出</p>
						<p class="num">
							<span class="int">150</span>
							<span class="float">.00</span>
						</p>
					</div>
				</div>
			</div>
			<div class="details_list">
				<div class="items">
					<div class="date">
						<p>10月12日 星期四</p>
						<p class="right">支出：10</p>
					</div>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">+10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
				</div>
				<div class="items">
					<div class="date">
						<p>10月12日 星期四</p>
						<p class="right">支出：10</p>
					</div>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">+10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
				</div>
				<div class="items">
					<div class="date">
						<p>10月12日 星期四</p>
						<p class="right">支出：10</p>
					</div>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">+10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
				</div>
				<div class="items">
					<div class="date">
						<p>10月12日 星期四</p>
						<p class="right">支出：10</p>
					</div>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">+10</span>
					</a>
					<a href="" class="item">
						<span class="iconfont"></span>
						<span class="content">午饭</span>
						<span class="num">-10</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import details from '@/data/details.json'
export default {
	data: function() {
		return {
			detailsList: {}
		}
	},
	props: {
		name: {
			type: String,
			default: 'vue-count'
		}
	},
	created: function() {
		this.getDeatils()
	},
	methods: {
		getDeatils() {
			this.detailsList = details.details
			// console.log(this.detailsList);
		},
	}
}
</script>
<style scoped>
	.name{
		color: #343133;
		font-size: 20px;
		font-weight: 500;
		line-height: 40px;
		text-align: center;
		background: #fed953;
	}
	.head_bar{
		padding: 5px 14px;
		background: #fed953;
		display: flex;
	}
	.head_bar .date{
		flex: .8;
	}
	.head_bar .in_out{
		flex: 3;
		display: flex;
	}
	.head_bar .in_out div{
		flex: 1;
	}
	.in_out .in,.in_out .out{
		padding-left: 10px;
	}
	.in_out .num{
		font-size: 18px;
		line-height: 28px;
	}
	.in_out .num .float{
		font-size: 14px;
	}
	.head_bar .date .year,.head_bar .in_out .title{
		font-size: 12px;
		line-height: 20px;
		color: #8c7b41;
	}
	.month_box{
		font-size: 12px;
		line-height: 28px;
		border-right: 1px solid #9a8743
	}
	.month_box .month{
		font-size: 18px;
	}
	.month_box .iconfont{
		font-size: 12px;
	}
	.details_list .items .date{
		padding: 0 14px;
		border-bottom: 1px solid #e1e1e1;
		line-height: 30px;
		height: 30px;
		box-sizing: border-box;
		position: relative;
		font-size: 12px;
		color: #969696;
	}
	.details_list .items .date .right{
		position: absolute;
		right: 14px;
		top: 0;
	}
	.details_list .items .item{
		display: block;
		height: 50px;
		line-height: 50px;
		box-sizing: border-box;
		padding: 0 14px;
		color: #343233;
		font-size: 14px;
		padding-left: 60px;
		position: relative;
	}
	.details_list .items .item .iconfont{
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 15px;
		left: 14px;
		top: 10px;
		background: url('../common/images/meal.png') center no-repeat;
	}
	.details_list .items .item .num{
		float: right;
	}
</style>
