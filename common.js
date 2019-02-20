$(function(){

	$("nav .inner > ul > li > ul").hover(function() {
	    $(this).addClass("on");
	}, function() {
		$(this).removeClass("on");
	});

	//메인화면 스크롤
	$(".scroll > a").click(function(){
        $('html, body').animate({scrollTop:1080}, 400);
        return false;
    });

	//메인화면 게시판 view
    $(".brd_list:eq(0)").css("display","block");
    $(".brd_con > ul > li > h3").click(function(){
		$(".brd_con > ul > li > h3").removeClass("on");
    	$(this).addClass("on");
    	$(".brd_list").hide();
    	$(this).siblings(".brd_list").show();
    });

    //게시판 상세보기
    $(".tbl_style01 tbody tr td.tit").click(function(){
    	$(".view_detail").hide();
    	$(this).parent("tr").next(".view_detail").show();
    });

    //회원학회소개 상세보기
    $(".tbl_style02 tbody tr td.tit").on("click", function(){
        if ($(this).hasClass("active")){
            $(this).removeClass("active")
            $(".detail").slideUp();
        } else {
        	$(".tbl_style02 tbody tr td.tit").removeClass("active");
        	$(this).addClass("active");
            $(".detail").slideUp();            
    		$(this).parent("tr").next("tr").find(".detail").slideDown();
        };
    });

    $('.lists_item .box_info')
    .bind('mouseover',function(event){
        $(this).children(".txt")
            .stop(true,true)
            .animate({bottom:'0'})
    })
    .bind('mouseleave', function(e) {
        var val = $(".lists_item img").height();
        $(this).children(".txt")
            .stop(true,true)
            .animate({bottom: -val - 10})
    });
});

$( window ).resize(function() {
    $(".lists_item .txt").attr('style','bottom:calc(-100% - 10px)')
});

$(window).on('load', function () {
    var count = $(".lists_item").length;
    if(count >= 16){
        load('#js-load', + 16);
    }else {
        load('#js-load', + count);
    }

    $("#js-btn-wrap .button").on("click", function () {
        load('#js-load', '4', '#js-btn-wrap');
    })
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .js-load:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;   
        $(btn).addClass("finish");
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}

//메뉴 고정
$(window).scroll(function () {
	
	var w_width = $(window).width();
	var top = $(window).scrollTop()
	
	//데스크탑 스크립트
	var target = 109;
	if (top > target) {
		$(".header").addClass("fixed");
		// $(".logo img").attr('src','../kwsImg/kwsCom/logo_on.png');
	} else {
		$(".header").removeClass("fixed");
		// $(".logo img").attr('src','../kwsImg/kwsCom/logo.png');
	}

	return false;
})


// 스크롤 탑
$(function() {
	scroll_top();
	scroll_view();
});

function scroll_view() {
	$(window).scroll(function() {
		if (scroll_state())
			$("#top_area").fadeIn(500);
		else
			$("#top_area").fadeOut(500);
	});
}

function scroll_state() {
	return $(document).scrollTop() != 0 ? true : false;
}

function scroll_top() {
	$(".ico_top").click(function() {
		$("html, body").stop().animate({ scrollTop: 0 }, 300);
	});
}

function openWindow(select) {
    window.open(select, '_blank');
}

//팝업내용
function layer_open(el, type){
    var temp = $('.' + el);
    var bg = temp.next().hasClass('bg');
    var popup = $('.' + type)
    popup.show();
    var layer = $(".password")

    $("body").attr('style','overflow:hidden !important')
    $("header").attr('style','z-index:1 !important')

    if(bg){
        temp.fadeIn();
    }else{
        temp.fadeIn();
    }

    // 화면중앙 레이어::방문신청안내
    if (layer.outerHeight() < $(document).height() ) layer.css('margin-top', '-'+layer.outerHeight()/2+'px');
    else layer.css('top', '0px');
    if (layer.outerWidth() < $(document).width() ) layer.css('margin-left', '-'+layer.outerWidth()/2+'px');
    else layer.css('left', '0px');

    temp.find('.btn_r').click(function(e){
        if(bg){
            temp.fadeOut();
            $("body").css('overflow','visible')
            $("header").attr('style','z-index:20 !important')
        }else{
            temp.fadeOut();
            $("body").css('overflow','visible')
            $("header").attr('style','z-index:20 !important')
        }
        e.preventDefault();
    });

    $('.bg').click(function(e){ 
        temp.fadeOut();
        e.preventDefault();
        $("body").css('overflow','visible')
        $("header").attr('style','z-index:20 !important')
    });
}