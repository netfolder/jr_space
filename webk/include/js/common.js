$(function(){
    
    /*2019.11.25*/   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $(".qbtn_top").fadeIn();
            $(".qbtn_top").addClass("on")
        } else {
            $(".qbtn_top").fadeOut();
            $(".qbtn_top").addClass("on")
        }
    });    
    /*//2019.11.25*/    
    

	//교재 소개 탭
	var tabW = 100;
	var $tabStyle = $(".tab_style2");
	var $tabList = $tabStyle.find("ul li");
	var tabLen = $tabList.length;
	var tabSize = tabW / tabLen;
	var tabListLastW;

  
    
    /* 2019.11.15 수정2 */
    var tab_li_width = [0,0,0,225.5,180.5,150.8,129.4,113.2]
	if(tabLen > 3){
        //$tabList.css({"width":tabSize + "%"});
        //tabListLastW = $tabStyle.find("ul li").outerWidth();
        $tabList.css({"width":tab_li_width[tabLen-1] + "px"});
        $tabList.eq(tabLen-1).css({"width":tabListLastW + tabLen-1}); 
    }
    /* //2019.11.15 수정2 */
    
    
	$(document).on("click", ".tab_style2 ul li", jsTabStyleClickEvent);

	function jsTabStyleClickEvent() {
		var idx = $(this).index();
		var $list = $(".tab_style2_list");

		$tabList.removeClass("on");
		$(this).addClass("on");
		$list.removeClass("active");
		$list.eq(idx).addClass("active");
	}


	// 브라우저 체크 
	var chromeCheckIe = navigator.userAgent.toLocaleLowerCase().indexOf("msie");
	if(chromeCheckIe > -1) {
		$("body").addClass("ie");
	}

	/* quick 관련 */
	$(".btn_top").click(function(){
		$( 'html, body' ).animate( { scrollTop : 0 }, 300 );
		return false;	
	})
    /* 2019.11.25 */
    $(".quick_state_btn").click(function(){
        
        $(this).parent().toggleClass("view_on")
    })
    /* 2019.11.25 */
    
    
	
	
	/* GNB 관련 */
	$(".gnb > li").bind("mouseenter focusin", function() {
		//console.log($(this).index() + " 번째 메뉴 over");
		$(this).addClass("on").siblings().removeClass("on");
		//$(".dimmed").show()
	});
	$(".gnb > li").bind("mouseleave focusout", function() {
		$(this).removeClass("on");
		//$(".dimmed").hide()
	});
    $(".all_menu_btn").bind("click" , function(){
        $(".gnb_all").toggleClass('on');
    })
    $(".gnb_all_close").bind("click" , function(){
        $(".gnb_all").removeClass('on');
        
    })

 	$(window).scroll(function () {
    	//console.log('asdasdd')
        if ($(this).scrollTop() > 50) {
            $(".quick_menu_wrap").addClass("on")         
        } else {
            $(".quick_menu_wrap").removeClass("on");         
        }
        

        if ($(this).scrollTop() > 250  && $(this).scrollTop() < 1500) {            
            $(".gnb_all_close").addClass("on")
        } else {           
            $(".gnb_all_close").removeClass("on");
        }
    });


	/*고객센터 자주하는질문 */
	$(".faq_list li .q_title").click(function(){
		$(this).parent(".faq_list li").toggleClass("active");
		$(this).next(".faq_list li .a_con").slideToggle();
		return false;
	});

	//교재자료실 동영상 스크랩 버튼 클릭시
	$(".video_list .good_mark").click(function(){
		$(this).toggleClass('on');
	});

	// notice
	$(document).on("click", ".contact_list li .list", jsSlideToggleEvent);

	function jsSlideToggleEvent() {
		$(this).next(".contact_list li .con").slideToggle();
	}

	//MY AVA 내 교재 관리
	$("div.case > a").click(function(e){
		$(this).toggleClass('on');
		return false;
	});





	/* 스크롤 영역 튜닝 */
	
	/* var jsScrollCustom = $(".scroll_obj").niceScroll({
		preservenativescrolling: false,
		cursorwidth: '6px',
		cursorborder: 'none',
		cursorborderradius:'5px',
		cursorcolor:"#d2d3d5",
		background:"#f5f5f5",
		autohidemode: false,
		height:"100px"
	}); */

});




//공통 사용 modal
var _ModalPopupBackgroundID = 'modal';
function ShowModalPopup(modalPopupID) {
	var popupID;

	if( modalPopupID.indexOf(".") == -1 && modalPopupID.indexOf("#") == -1){
		console.log("없을때")
		popupID = "#" + modalPopupID;
	}else{
		console.log(" # or . 있을때 ") // # 있을대 
		popupID =  modalPopupID;
	}

    
    var popupMarginTop = $(popupID).height() / 2;
    var popupMarginLeft = $(popupID).width() / 2;
    $('body').css('overflow', 'hidden');
    $(popupID).css({
        'left': '50%',
        'top': '50%',
        'margin-top': -popupMarginTop,
        'margin-left': -popupMarginLeft,
        'background-color': '#fff',
        'display': 'block',
        'position': 'fixed',
        'z-index': 99999
    });

    var backgroundSelector = $('<div id="' + _ModalPopupBackgroundID + '" ></div>');
    backgroundSelector.appendTo('body');

    backgroundSelector.css({
        'width': "100%",
        'height': "100%",
        'display': 'none',
        'background-color': '#000',
        'filter':'alpha(opacity=50)',
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'z-index': 99998
    });

    backgroundSelector.fadeTo('fast', 0.4);
         backgroundSelector.click(function(){
             HideModalPopup(modalPopupID)
        });

}
function HideModalPopup(modalPopupID) {

	var popupID;

	if( modalPopupID.indexOf(".") == -1 && modalPopupID.indexOf("#") == -1){
		//console.log("없을때")
		popupID = "#" + modalPopupID;
	}else{
		//console.log(" # or . 있을때 ") // # 있을대 
		popupID =  modalPopupID;
	}


	
    $(popupID).css('display', 'none');
    $("#" + _ModalPopupBackgroundID).remove();
    $('body').css('overflow', 'auto');
}


