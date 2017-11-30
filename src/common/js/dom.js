export function fullScreen() {
	var oHeight = window.screen.height
	$('#app').css({'height':oHeight})
	$('#count').css({'top':oHeight})
	$('#count').css({'height':oHeight})
	$('#main').css({'height':oHeight-44,'max-height':oHeight-44})
	$('#count .categorys').css({'height':oHeight-44,'max-height':oHeight-44})
	$('#doCount').on('click', function() {
		$('#count').animate({'top': 0}, 'fast', 'linear')
	})
}
