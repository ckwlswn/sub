// main.js
$(function(){

    // 비주얼 버튼 클릭
    $('#lnb > a').click(function(){
        // 클래스 제거(상태 초기화)
        $('#lnb > a').removeClass('selected');

        // 클래스 추가
        $(this).addClass('selected');
     
    });
});