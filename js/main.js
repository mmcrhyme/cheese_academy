// jsを記述する際はここに記載していく

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});

$(window.onload = function () {
	setTimeout(function(){
		$('.start').fadeOut();

		setTimeout(function(){
			$(".header").animate({
				opacity: 1}, 900);
		})
	
	},6000); //6秒後にロゴ含め真っ白背景をフェードアウト！
});

$(".photo1").slick({
	dots: true,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 1000,
});


// ページをスクロール
$('#nav a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});


