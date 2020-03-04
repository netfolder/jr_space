$(function(){
    
   // 브라우저 체크 
	var chromeCheckIe = navigator.userAgent.toLocaleLowerCase().indexOf("msie");
	if(chromeCheckIe > -1) {
		$("body").addClass("ie");
	}
		
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
	
	// 햄버거 메뉴 클릭

	$(".ham").click(function(){
		$(this).find(".menu-trigger").toggleClass("active-1")
	})

	







	



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


