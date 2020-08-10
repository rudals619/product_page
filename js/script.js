$(document).ready(function(){
    
    var $arr = [
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20200202", "30"],
        ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "30000", "20200702", "8"],
        ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "50000", "20200406", "12"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20080202", "56"],
        ["img6.jpg", "거실 인테리어 9", "합리주의 실용 인테리어 9", "20000", "20000412", "100"],
        ["img7.jpg", "거실 인테리어 7", "합리주의 실용 인테리어 7", "10000", "19940412", "57"],
        ["img8.jpg", "화장실 인테리어 3", "심플 실용 인테리어 3", "26000", "20200502", "21"],
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20200202", "30"],
        ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "30000", "20200702", "8"],
        ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "50000", "20200406", "12"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20080202", "56"],
        ["img6.jpg", "거실 인테리어 9", "합리주의 실용 인테리어 9", "20000", "20000412", "100"],
        ["img7.jpg", "거실 인테리어 7", "합리주의 실용 인테리어 7", "10000", "19940412", "57"],
       
        //["img9.jpg", "거실 인테리어 5", "합리주의 실용 인테리어 5", "86000", "20200102", "99"],
    ];
    

    var $cont = `
        <div class="pd_box">
            <div class="pd_photo">
                <img src="img/img1.jpg" alt="...">
            </div>
            <div class="pd_info">
                <h3 class="pd_title">Title</h3>
                <p class="pd_text">Context</p>
                <div class="pd_etc">
                    <span class="pd_price">가격정보</span>
                    <span class="pd_date">업데이트 날짜</span>
                </div>
                <p class="fav">좋아요&nbsp; <span>100</span></p>
            </div>
        </div>                
    `;

   
    
    
    

    var $btn_index; 

    for(i=0; i<$arr.length; i++){
        $(".pd_frame").append($cont);
    };

    //each 전체를 pd_sort라는 함수문으로 선언해줌
   function pd_sort(){ 
        $(".pd_frame .pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src","img/"+$arr[index][0]);
            $(this).find(".pd_info .pd_title").text($arr[index][1]);
            $(this).find(".pd_info .pd_text").text($arr[index][2]);
            $(this).find(".pd_price").text($arr[index][3]);
            $(this).find(".pd_date").text($arr[index][4]);
            $(this).find(".pd_info .fav span").text($arr[index][5]);
        });
        $(".sort_button button").removeClass("active"); 
        $(".sort_button button").eq($btn_index).addClass("active");
        $(".sort_sel option").prop("selected", false);
        $(".sort_sel option").eq($btn_index+1).prop("selected", true); //클릭한곳의 옵션에만 select
    };
    pd_sort();
    ///////////////////////////////////버튼클릭시////////////////////////////////////

    $(".date_sort").click(function(){
        $arr.sort(function(a, b){//매개변수 두가지 문자를 넣어서 매개변수값에 들어간 값으로 sorting
            //return a[4] - b[4]; //작은순
            return b[4] - a[4]; //큰순
        });
        // $arr.reverse(); reverse() 메서드 : 배열을 역순으로 변경 ->큰순
        console.log($arr);
        $btn_index = $(this).index();
        pd_sort();
        /*$(".sort_button button").removeClass("active");
        $(this).addClass("active");

        $(".pd_frame .pd_box").each(function(index){ //최신순 버튼 클릭 시 화면에 보여지는 each문
            $(this).find(".pd_photo img").attr("src","img/"+$arr[index][0]);
            $(this).find(".pd_info .pd_title").text($arr[index][1]);
            $(this).find(".pd_info .pd_text").text($arr[index][2]);
            $(this).find(".pd_price").text($arr[index][3]);
            $(this).find(".pd_date").text($arr[index][4]);
            $(this).find(".pd_info .fav span").text($arr[index][5]);
        });        
        */
    });

    $(".low_sort").click(function(){
        $arr.sort(function(a, b){
            return a[3] - b[3];
        });
        console.log($arr);
        $btn_index = $(this).index();
        pd_sort();

        /*$(".sort_button button").removeClass("active");
        $(this).addClass("active");

      $(".pd_frame .pd_box").each(function(index){ //최신순 버튼 클릭 시 화면에 보여지는 each문
            $(this).find(".pd_photo img").attr("src","img/"+$arr[index][0]);
            $(this).find(".pd_info .pd_title").text($arr[index][1]);
            $(this).find(".pd_info .pd_text").text($arr[index][2]);
            $(this).find(".pd_price").text($arr[index][3]);
            $(this).find(".pd_date").text($arr[index][4]);
            $(this).find(".pd_info .fav span").text($arr[index][5]);
        });        
        */
    });

    $(".high_sort").click(function(){
        $arr.sort(function(a, b){
            return b[3] - a[3];
        });
        console.log($arr);
        $btn_index = $(this).index();
        pd_sort();

        /*$(".sort_button button").removeClass("active");
        $(this).addClass("active");

      $(".pd_frame .pd_box").each(function(index){ //최신순 버튼 클릭 시 화면에 보여지는 each문
            $(this).find(".pd_photo img").attr("src","img/"+$arr[index][0]);
            $(this).find(".pd_info .pd_title").text($arr[index][1]);
            $(this).find(".pd_info .pd_text").text($arr[index][2]);
            $(this).find(".pd_price").text($arr[index][3]);
            $(this).find(".pd_date").text($arr[index][4]);
            $(this).find(".pd_info .fav span").text($arr[index][5]);
        });        
        */
    });

    $(".fav_sort").click(function(){
        $arr.sort(function(a, b){
            return b[5] - a[5];
        });
        console.log($arr);
        $btn_index = $(this).index();
        pd_sort();

        /*$(".sort_button button").removeClass("active");
        $(this).addClass("active");

      $(".pd_frame .pd_box").each(function(index){ //최신순 버튼 클릭 시 화면에 보여지는 each문
            $(this).find(".pd_photo img").attr("src","img/"+$arr[index][0]);
            $(this).find(".pd_info .pd_title").text($arr[index][1]);
            $(this).find(".pd_info .pd_text").text($arr[index][2]);
            $(this).find(".pd_price").text($arr[index][3]);
            $(this).find(".pd_date").text($arr[index][4]);
            $(this).find(".pd_info .fav span").text($arr[index][5]);
        });        
        */
    });

    $(".sort_sel").change(function(){
        var $sel_val = $(this).val();
        $(".sort_sel option").prop("selected", false);
        $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true);
        console.log($sel_val);
        if($sel_val == "date"){
            $arr.sort(function(a, b){
                return b[4] - a[4];                
            });
            pd_sort();            
            $(".sort_button button").removeClass("active"); //셀렉트박스에서 선택시
            $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //date쪽에만 addclass해서 회색스타일이 적용되도록 만든다. //value = date -> class = date_sort

        }else if($sel_val == "low"){
            $arr.sort(function(a, b){
                return a[3] - b[3];                
            });
            pd_sort();
            $(".sort_button button").removeClass("active");
            $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //low쪽에만 addclass
        }else if($sel_val == "high"){
            $arr.sort(function(a, b){
                return b[3] - a[3];                
            });
            pd_sort();
            $(".sort_button button").removeClass("active");
            $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //high쪽에만 addclass
        }else if($sel_val == "fav"){
            $arr.sort(function(a, b){
                return b[5] - a[5];                
            });
            pd_sort();
        }
        $(".sort_button button").removeClass("active"); 
        $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //fav쪽에만 addclass
        

        $(".sort_sel option").prop("selected", false); //셀렉트박스 옵션에서 선택 해제
        $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true); //선택한 곳의 value값과 일치하는 곳에만 선택

       
       
    });

     //돌리기 전에 box를 잡아야 하기 때문에 마지막으로 빼준다. 
     //배열 데이터의 개수가 8개라면, 8/4 = 2, 나머지 0 -> if
     var $ea_item = 4; //각 페이지별 네개의 아이템 보여주겠다는 선언
     if($arr.length % $ea_item == 0){
         for(k = 0; k < $arr.length / $ea_item; k++){
             $(".pager").append("<li>"+(k+1)+"</li>");
         }
     }else{
         for(k = 0; k <= $arr.length / $ea_item; k++){
             $(".pager").append("<li>"+(k+1)+"</li>");
         }
     }
     $(".pager li").eq(0).addClass("active");
     //$(".pd_box").show();
     $(".pd_box").eq($ea_item - 1).nextAll().hide(); //나를빼고 다음형제 전부 hide

     $(".pager li").click(function(){
        var $pager_txt = $(this).text();
        $(".pd_box").show();
        $(".pd_box").eq(4 * ($pager_txt - 1)).prevAll().hide(); 
        $(".pd_box").eq(4 * $pager_txt - 1).nextAll().hide(); 
        //선택한페이저에해당하는 eq들값만나타남 2(text)클릭-> 인덱스 4~7
        //4($ea_item) * (2-1) ; 4 >> 2번째 페이지에서 보여줘야 할 인덱스 번호
        //3번을 클릭했다면 text3, 인덱스 번호 8~11만 보여준다
        // 4*2 = 8, 3번째 페이지에서 처음 보여주어야 할 인덱스 번호
    //2를 클릭했을 때 4~7 만 보여줘야 하니까, prevAll은 페이저 하나 빼고 곱하고 nextAll은 곱한 다음에 하나 빼준다.
        $(".pager li").removeClass("active");
        $(this).addClass("active");
    });
    

     







    
});