/*
1) 앙팡토토에서
2) IOS 내부에서
3) 가리려는 element를  선택
4) hide()
#############################################
[Javascript에 정보(데이타)를 저장하고/꺼내쓰는 타입/방식]
.
Data Type: Number, String, boolean, Array=Object
typeof x
http://www.w3schools.com/js/js_datatypes.asp
#############################################
function name(y,z){
	var x=y+1+z;
	return x;
}
name();
#############################################
http://www.w3schools.com/js/js_operators.asp
+=
++
--
==
!=
===
#############################################
$('css문법') => jQuery 문법 => javascript를 손쉽게 사용
jQuery Selector는 Object(html element)를 반환한다.
반환된 jQuery Object는 jQuery method, Properties를 사용할 수 있다.
this
#############################################
HTML Form Tag -- 2015-04-09 : 5회
#############################################
2015-04-16 : 6회
1) 복습
2) 기술지원 1개 -- 메리분 앱 배너

/* 메리분 앱 배너
 * 우리 스마트앱 2.0: 쿠키를 통해서 앱/OS를 체크합니다. || (navigation.userAgent)
 * Cookie: SMA_in_app=smartapp
 * Cookie: SMA_os=ios, SMA_os=android
 * Io/s 설치 : https://appsto.re/kr/Enjp6.i
 * Android 설치 : market://details?id=kr.co.smartskin.maryboone


조건에 띠라 링크를 걸자
 * 1) 앱 안에 있을 때 (쿠키)
 * 2) 그리고 아이폰인 경우 : userAgent => 링크 실행
 * 
 * 1) 앱 안에 있을 때 (쿠키)
 * 2) 그리고 안드로이드인 경우 : userAgent => 링크 실행
 * 
 * "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
 * "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5"
#############################################
2015-04-16 : 7회
1) 메리분 앱 배너 => 다른 방법으로 변경하기
2) 조건문 (if, else, else if)
3) 앱 설치 추천코드-> 앱에서 동작하지 않게하기: 기존코드=>수정 
4) 앱에서 특정배너(인자-함수) 노출되지 않게하기

1) 함수를 만든다
2) 함수를 호출(실행)한다.

/* 클릭(터치)을 통해서 실행
 * 페이지 로딩(ready, onload)에서 실행
 * 스크롤에 반응해서 실행
 * 스와이프를 통한 실행
 * pinch on/Off
 * 키보드 입력을 통한 실행
 * 길게(꾹) 누르기
 * 더블클릭을 통한 실행
 * 마우스 오버를 통한 실행
 * 드래그를 통한 실행
 * 폼 값이 변경(onchange)을 통한 실행
 * http://www.w3schools.com/js/js_events.asp
#############################################
JSON.parse()
try catch
#############################################
MAC: APM 세팅
http://choijiho.tistory.com/41
############################################# */


/* function Call(호출)
 * =========================================================== */
cart_count_change(3);






/* function List
 * =========================================================== */
function smartskinAppLink(){
	var cookie=document.cookie;
	var in_app=cookie.indexOf('SMA_in_app=smartapp');
	
	var userAgent=navigator.userAgent;
	var ios=userAgent.indexOf('iPhone');
	var android=userAgent.indexOf('Android');
	
	//조건문
 	if(in_app != -1){
 		//앱인 경우 => 감추기
 		$("#이미지").hide();
 	}else{
 		//웹인 경우
 		if(ios!=-1){
 			window.location.href="https://appsto.re/kr/Enjp6.i";
 		}
		if(android!=-1){
			window.location.href="market://details?id=kr.co.smartskin.maryboone";
		}
 	}
}

function cart_count_change(num){
	$('#cart_badge').text(num);
}

