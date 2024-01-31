$(document).ready(function () {
  //nav--------------------------------------
  $(".sub").hide();

  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });



  //main---------------------------------
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; 
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000);

  //하단버튼
  $btn.click(function(){
    clearInterval(timer); 
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  //brand----------------------------------------



  //store---------------------------------------------
  $(".title").click(function(){
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active"); 
    $(this).siblings(".content").stop().slideUp(); 
    $(this).next().stop().slideToggle();
  });


  //Menu-------------------------------------------------

  let banner_w= $(".ban ul li").width()+50;
  
  $(".ban ul li:last").prependTo(".ban ul");
  $(".ban ul").css({ left:-banner_w});

  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); 
			$(this).css({left:-banner_w}); 
		});
  };

  bauto = setInterval(bannerAuto,4000);

  $(".ban").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,4000);
  });


});