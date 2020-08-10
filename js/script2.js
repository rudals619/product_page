$(document).ready(function(){
    var $price = $(".pd_price span").text(); //현재가격정보를저장
    console.log("현재가격의원본정보;" + $price);
    console.log("현재가격의원본정보의데이터타입;" + typeof $price);
    var $origin_price = $price.replace(",", ""); //쉼표제거한원본숫자만저장(string)
    console.log("숫자정보의값;" + $origin_price);
    console.log("숫자정보의데이터타입;" + typeof $origin_price);
    $($price)
    var $total_price_opt;
    var $total_price_result ="";//문자형데이터라고 기록하는모양
    var $opt_val =""; //처음부터문자형데이터이기때문에전역변수로선언해준상태에서쓰면깨질수있음
    var $basic_price = parseFloat($origin_price);    
    var $num = $(".pd_count_box input").val();

    function calc_price(){
        $(".pd_count_box input").val($num);
        /*
        $total_price =$basic_price * $num;
        var $total_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
        $(".total_price_num span").text($total_result); 
        */
        $opt_val = $(".pd_option select").val();
        $total_price_opt = parseFloat($opt_val) + $basic_price * $num;//parsefloat을 붙여주면 
        $total_price_result = $total_price_opt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
        $(".total_price_num span").text($total_price_result);

        var $detail_img = $(".pd_img img").attr("src");
        $(".cart_img img").attr("src", $detail_img);
        var $detail_title = $(".pd_title h3").text();
        $(".cart_info h2").text($detail_title);
        $(".buy_price span").text($total_price_result);

        var $sel_opt_txt = $(".pd_option select option:selected").text();
        $(".bottom_list p span").text($sel_opt_txt);
        
        var $opt_defalut =  $(".pd_option select option:selected").attr("value");
        if($opt_defalut == "0"){
            $(".bottom_list").hide();
        }else{
            $(".bottom_list").show();
        } 
    };

    $(".pd_count_box a:first").click(function(){
        if($num < 2){ //현재구매수량이1일경우작동x            
        }else{ //현재구매수량이2이상일경우,1씩감소
            $num--; 
            calc_price();                  
        }        
        return false;
    });
    $(".pd_count_box a:last").click(function(){
        $num++;
        calc_price();    
        return false;
    });
    
    $(".pd_option select").change(function(){
        var $opt_val = $(this).val();
        console.log(typeof $opt_val);
        calc_price();
    });

    $(".pd_btn li:last-child input").click(function(){
        $(".mycart").addClass("active");
        $(".dark").addClass("active");
        calc_price();        
    });
    $(".cart_btn li:last-child input, .dark, .close_btn").click(function(){
        $(".mycart").removeClass("active");
        $(".dark").removeClass("active");
    });
     
    




});

//정규표현식 /\B(?=(\d{3})+(?!\d))/g
// #1. / ~ / : 자바스크립트를 사용할 수 있는 정규식 표현의 시작과 끝
// #2. \B : 공백
// #3. ?= : 내부의 정규식 실행문을 조합하여 결로 도출
// #4. \d : dimension 0~9 까지의 숫자 데이터만을 지정
// #5. \d{3}: 좌측자리부터 세자리마다 패턴구성
// #6. ?!\d : 숫자 데이터만을 지정 (!) 숫자를 세는 과정에서 역순으로 개수를 세겠다는 의미. 부정형 전방 탐색 (역방향으로 1셈)
// #7. g : 글로벌 정규 표현식을 사용하겠다
//(실수의 우측으로부터 첫번째 자리 숫자가 총 10개라면 10의자리 순서까지 지정)
//1,000,000,000 =>