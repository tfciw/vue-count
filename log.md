<h1>实现过渡效果</h1>

<h2>简单版</h2>
<transition name="pop-out">
	<router-view class="router-view"></router-view>
</transition>
很重要的一点就是给router-view加了一个类，不然就会出现每一次过渡时，宽度不是100%；
只需要在css里给pop-out加相关类即可。
	
<h2>判断前后</h2>
通过一个参数forward，，判断给pop加in还是out pop-in pop-out
首先安装vuex，使用状态管理 -S
this.$store.state.direction  调用一个数据

	
	//router transition 历史管理 开始

	const history = window.sessionStorage
	history.clear()
	let historyCount = history.getItem('count') * 1 || 0
	history.setItem('/', 0)

	store.registerModule('vux', {
	  state: {
	    direction: 'forward'
	  },
	  mutations: {
	    updateDirection (state, payload) {
	      state.direction = payload.direction
	    }
	  }
	})

	router.beforeEach(function (to, from, next) {

	  const toIndex = history.getItem(to.path)
	  const fromIndex = history.getItem(from.path)

	  if (toIndex) {
	    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
	      store.commit('updateDirection', {direction: 'forward'})
	    } else {
	      store.commit('updateDirection', {direction: 'reverse'})
	    }
	  } else {
	    ++historyCount
	    history.setItem('count', historyCount)
	    to.path !== '/' && history.setItem(to.path, historyCount)
	    store.commit('updateDirection', {direction: 'forward'})
	  }

	  if (/\/http/.test(to.path)) {
	    let url = to.path.split('http')[1]
	    window.location.href = `http${url}`
	  } else {
	    next()
	  }
	})

	//router transition 历史管理 结束

<p>transition 懂得还不彻底，需要后面补</p>

<h1>使用localStorage</h1>
	localStorage.setItem() 
	localStorage.getItem() 
	需要注意的是，将一个数组存储是以字符串的形式存储，所以存储json的时候需要JSON.stringify()
	取出来的时候需要JSON.parse()
	map()
<h1>子组件向父组件建立tongxin</h1>

<pre>
	1, 项目中用到了vue，对vue有什么了解，vue的核心功能是怎么实现的
	2，你还用到了jquery，看过jquery源码吗？
	3，我在vue项目中使用jquery遇到的坑，不能方便的使用全局$
	4，ajax实际操作
</pre>
	
