<template>
	<div id="count">
		<div class="head">
			<p class="title">支出<span class="iconfont">&#xe67f;</span></p>
			<a href="javascript:;" class="cancel" @click="cancelChecked">取消</a>
		</div>
		<div class="categorys">
			<ul>
				<li v-for="i in 10">
					<span class="title">早餐</span>
				</li>
				<li v-for="i in 10">
					<span class="title">午餐</span>
				</li>
				<li v-for="i in 10">
					<span class="title">晚餐</span>
				</li>
			</ul>
		</div>
		<Calculator v-if="isChecked" :oCal="oCal" @_cancelChecked="cancelChecked" @refresh="refresh"></Calculator>
	</div>
</template>
<script>
import Calculator from '@/components/Calculator/Calculator'
export default {
	data: function() {
		return {
			isChecked: false,
			oHeight: window.screen.height,
			oCal: ''
		}
	},
	components: {
		Calculator
	},
	mounted: function() {
		this.checked()
	},
	methods: {
		checked() {
			var _this = this
			var oLi = $('#count .categorys li')
			for (var i = 0; i < oLi.length; i++) {
				oLi[i].onclick = function() {
					for (var i = 0; i < oLi.length; i++) {
						$('#count .categorys li').removeClass('active')
					}
					$(this).addClass('active')
					_this.isChecked = true
					_this.oCal = $(this).find('.title').text()
					// console.log(_this.oCal)
					$('#count .categorys').css({'height':_this.oHeight-284})
				}
			}
		},
		cancelChecked() {
			this.isChecked = false
			$('#count .categorys').css({'height':this.oHeight-44})
			var oLi = $('#count .categorys li')
			for (var i = 0; i < oLi.length; i++) {
				$('#count .categorys li').removeClass('active')
			}
			$('#count').animate({'top':this.oHeight}, 'fast', 'linear')
		},
		refresh() {
			this.$emit('refresh')
		}
	}
}
</script>
<style scoped>
	#count{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99
	}
	.head{
		width: 100%;
		height: 44px;
		line-height: 44px;
		text-align: center;
		position: relative;
		background: #fed953;
	}
	.cancel{
		position: absolute;
		right: 15px;
		top: 0;
		color: #000;
	}
	.categorys{
		background: #fff;
		padding: 0 15px;
		overflow: scroll;
	}
	.categorys li{
		float: left;
		width: 25%;
		text-align: center;
		margin: 10px 0;
	}
	.active{
		background: #fed953;
		color: #fff;
	}
</style>
