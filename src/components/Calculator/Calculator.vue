<template>
	<div id="calculator">
		<div class="top">
			<div class="leftCon">
				<span>备注：</span>
				<span class="right">{{firstNo}}{{mask}}{{secondNo}}</span>
			</div>
			<div class="rightCon">
				
			</div>
		</div>
		<div class="main">
			<div class="leftNo">
				<ul>
					<li @click="changeNo(i, defaultItem)" v-for="i in items">{{i}}</li>
					<li @click="del()">del</li>
				</ul>
			</div>
			<div class="rightNo">
				<ul>
					<li @click="">今天</li>
					<li @click="add()">+</li>
					<li @click="reduce()">-</li>
					<li @click="calDone()">{{btnText}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		oCal: {
			tpye: String,
			default: ''
		}
	},
	data() {
		return {
			items: [
				'7',
				'8',
				'9',
				'4',
				'5',
				'6',
				'1',
				'2',
				'3',
				'.',
				'0',
			],
			firstNo: '',
			secondNo: '',
			oldmask: '',
			mask: '',
			defaultItem: 'firstNo',
			btnText: '完成'
		}
	},
	mounted: function () {
	},
	methods: {
		addData(lastData) {
			let data = JSON.parse(localStorage.getItem('detailsList'))
			let isNew = true
			data.map( (item) => {
				if(item.date === lastData.date) {
					item.details.push(lastData)
					localStorage.setItem('detailsList',JSON.stringify(data))
					this.$emit('refresh')
					isNew = false
				}
			})
			if(isNew) {
				data.push({
					"date": lastData.date,
					"inOrOut": "收入",
					"money": 1473,
					"details": [
						lastData
					]
				})
				localStorage.setItem('detailsList',JSON.stringify(data))
				this.$emit('refresh')
			}
		},
		changeNo(i, defaultItem) {
			this[defaultItem] += i
		},
		add() {
			if(this.oldmask == '') {
				this.mask = '+'
				this.defaultItem = 'secondNo'
				this.oldmask = '+'
				this.btnText = '='
			} else if(this.oldmask == '+') {
				this.firstNo = String(Number(this.firstNo) + Number(this.secondNo))
				this.secondNo = ''
				this.oldmask = '+'
				this.mask = '+'
			} else if(this.oldmask = '-') {
				this.firstNo = String(Number(this.firstNo) - Number(this.secondNo))
				this.secondNo = ''
				this.oldmask = '+'
				this.mask = '+'
			}
		},
		reduce() {
			if(this.oldmask == '') {
				this.mask = '-'
				this.defaultItem = 'secondNo'
				this.oldmask = '-'
				this.btnText = '='
			} else if(this.oldmask == '+') {
				this.firstNo = String(Number(this.firstNo) + Number(this.secondNo))
				this.secondNo = ''
				this.oldmask = '-'
				this.mask = '-'
			} else if(this.oldmask = '-') {
				this.firstNo = String(Number(this.firstNo) - Number(this.secondNo))
				this.secondNo = ''
				this.oldmask = '-'
				this.mask = '-'
			}
		},
		del() {
			if(this.mask == '') {
				this.firstNo = this.firstNo.substring(0, this.firstNo.length-1)
				if(this.firstNo.length == 0) {
					this.defaultItem = 'firstNo'
				}
			} 
			if(this.secondNo !== '') {
				this.secondNo = this.secondNo.substring(0, this.secondNo.length-1)
			}
		},
		calDone() {
			if(this.firstNo !== '' && this.mask == '') {
				// 提交最终记账
				// firstNo 数额
				// oCal 分类
				// date 具体时间
				var date = new Date()
				var trueDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
				var lastData = {
					"id": "20161118-akcDa5DQ4",
					"for": "-",
					"date": trueDate,
					"year": date.getFullYear(),
					"month": date.getMonth() + 1,
					"day": date.getDate(),
					"category": this.oCal,
					"priceNum": Number(this.firstNo),
					"content": this.oCal
				}
				// console.log(lastData)
				this.addData(lastData)
				this.$emit('_cancelChecked')
			}
			if(this.secondNo !== '') {
				if(this.mask == '+') {
					this.firstNo = String(Number(this.firstNo) + Number(this.secondNo))
					this.secondNo = ''
					this.oldmask = ''
					this.mask = ''
					this.btnText = '完成'
				}else if(this.mask == '-') {
					this.firstNo = String(Number(this.firstNo) - Number(this.secondNo))
					this.secondNo = ''
					this.oldmask = ''
					this.mask = ''
					this.btnText = '完成'
				}
			} else {
				if(this.mask !== '') {
					this.mask = ''
					this.btnText = '完成'
				}
			}
			this.defaultItem = 'firstNo'
		}
	}	
}
</script>
<style scoped>
	.right{
		float: right;
	}
	#calculator {
		width: 100%;
		height: 240px;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.top{
		height: 40px;
		line-height: 40px;
		padding: 0px 15px;
		border-top: 1px solid #d9d9d9;
		color: #7e7e7e;
	}
	.top .leftCon input{
		border: none;
		outline: none;
		color: #7e7e7e;
	}
	.main{
		height: 200px;
	}
	.main .leftNo{
		width: 75%;
		height: 200px;
		float: left;
	}
	.main .leftNo li{
		float: left;
		width: 25%;
		box-sizing: border-box;
	}
	.main .leftNo li{
		height: 50px;
		width: 33.3%;
		line-height: 50px;
		text-align: center;
		border-top: 1px solid #d9d9d9;
		border-right: 1px solid #d9d9d9;
		color: #050101;
	}
	.main .rightNo{
		width: 25%;
		height: 200px;
		float: right;
	}
	.main .rightNo li{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-top: 1px solid #d9d9d9;
		border-right: 1px solid #d9d9d9;
		color: #050101;
		box-sizing: border-box;
	}
	.main .rightNo li:last-child{
		background: #fed953;
		border: none;
	}
</style>
