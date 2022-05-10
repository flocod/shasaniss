var $cursor = $(".cursor");

function moveCursor(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.clientX,
      top: e.clientY,
      opacity: 1,
    },
  });
}

$(window).on("mousemove", moveCursor);

var $contain_cursor = $(".contain_cursor");

function moveContain_cursor(e) {
  TweenLite.to($contain_cursor, 0.7, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
}
$(window).on("mousemove", moveContain_cursor);

var $point = $(".pointer");

function movePoint(e) {
  TweenLite.to($point, 0.3, {
    css: {
      left: e.clientX,
      top: e.clientY,
    },
  });
}

$(window).on("mousemove", movePoint);

$(window).on("mousemove", () => {
  if ($(".link:hover").length != 0) {
    TweenLite.to($point, 0.3, {
      width: "150px",
      height: "150px",
      "background-color": "#DC3D41",
    });
    TweenLite.to($cursor, 0.3, {
      width: "200px",
      height: "200px",
      "background-color": "#DC3D41",
      border: "none",
    });
  } else {
    TweenLite.to($point, 0.3, { width: "20px", height: "20px","background-color": "white", });
    TweenLite.to($cursor, 0.3, {
      width: "20px",
      height: "20px",
      "background-color": "white",
    });
  }
});
$(window).on("mousedown", () => {
    TweenLite.to($cursor, 0.3, {
        width: "200px",
        height: "200px",
        "background-color": "#DC3D41",
        border: "none",
      });
});
$(window).on("mouseup", () => {
    TweenLite.to($cursor, 0.3, {
        width: "20px",
        height: "20px",
        "background-color": "white",
      });
});

let carouss_img = $(".carouss .images img");
let carouss_images = {
  img1: $(".img1"),
  img2: $(".img2"),
  img3: $(".img3"),
  img4: $(".img4"),
  img5: $(".img5"),
};

let carouss_image_indice = $(".state_carous span");
let carouss_images_indice = {
  indice1: $(".indice1"),
  indice2: $(".indice2"),
  indice3: $(".indice3"),
  indice4: $(".indice4"),
  indice5: $(".indice5"),
};

let statecarous = 0;
function animecarouss() {
  if (statecarous == 0) {
    carouss_img.removeClass("active");
    carouss_images.img1.addClass("active");
    statecarous = 1;
    console.log(statecarous);

    carouss_image_indice.removeClass("active");
    carouss_images_indice.indice1.addClass("active");
  } else if (statecarous == 1) {
    carouss_img.removeClass("active");
    carouss_images.img2.addClass("active");
    statecarous = 2;
    console.log(statecarous);

    carouss_image_indice.removeClass("active");
    carouss_images_indice.indice2.addClass("active");
  } else if (statecarous == 2) {
    carouss_img.removeClass("active");
    carouss_images.img3.addClass("active");
    statecarous = 3;
    console.log(statecarous);

    carouss_image_indice.removeClass("active");
    carouss_images_indice.indice3.addClass("active");
  } else if (statecarous == 3) {
    carouss_img.removeClass("active");
    carouss_images.img4.addClass("active");
    statecarous = 4;
    console.log(statecarous);

    carouss_image_indice.removeClass("active");
    carouss_images_indice.indice4.addClass("active");
  } else if (statecarous == 4) {
    carouss_img.removeClass("active");
    carouss_images.img5.addClass("active");
    statecarous = 0;
    console.log(statecarous);

    carouss_image_indice.removeClass("active");
    carouss_images_indice.indice5.addClass("active");
  }
}

setInterval(animecarouss, 7000);

// smouth scroling

// $(window).on('mousewheel DOMMouseScroll', function(e) {
//   var dir,
//       amt = 10;

//   e.preventDefault();
//   if(e.type === 'mousewheel') {
//     dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
//   }
//   else {
//     dir = e.originalEvent.detail < 0 ? '-=' : '+=';
//   }

//   $('html, body').animate({
//     scrollTop: dir + amt
//   },1000, 'linear');

// })


TweenMax.staggerTo(".scroll_anime",1,{
    scale:1,
    y: 90,
    height:0,
    ease: Power1.easeInOut,
    yoyo:true,
    repeat:-1,
});






// cacher et montrer les elements aux scroll

//  cacher et montrer l'element after du side menu au scroll.......
let progress_state;
$(document).ready(function () {
  totalheight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    progress = (window.pageYOffset / totalheight) * 100;
    progress = Math.round(Number(progress));
    progress = progress + "%";
    header = $(".header");

    if (progress_state < progress) {
      header.addClass("header_active");
      header.addClass("header_disapear");
      console.log("scroll to bottom");
    } else if (window.pageYOffset == 0) {
      
      header.removeClass("header_active");
      if(window.innerWidth>1000){
        $('.scroll_indice').css('display','flex');
      }
      
    }else if(progress_state > progress){
      header.removeClass("header_disapear");
        if(window.innerWidth>1000){
          $('.scroll_indice').css('display','none');
        }
    }

    progress_state = progress;
  };
});

$(document).ready(function () {


    var tl = new TimelineLite();
    var tl2 = new TimelineLite();


    tl.staggerTo(".wrapper div",0.5,{
        x:0,
        ease: Power1.easeInOut,
      yoyo:true,
     
        stagger:{
            from: 0,
            each: 0.1
        }
    });
    tl2.staggerTo(".menu_mobile .struct",0.7,{
      
        x:0,
        ease: Power1.easeInOut,
      yoyo:true,
     
        stagger:{
            from: 0,
            each: 0.1
        }
    });
  
    function wrapperOn (){
        if(tl.progress() < 1){
          tl.play();
        } else {
          tl.restart();
        }
      }

      function wrapperOff(){
        if(tl.progress() > 0){
          tl.reverse();
        } else {
          tl.reverse(0); //reverses from the end
        }
      }

   
    // window.onload=function(){
    //     $('.menu_mobile').css('height',window.innerHeight+'px');
    //     console.log( $('.menu_mobile').css('height'));
    // }
    // $('.menu_mobile').css('height',window.innerHeight+'px');


    menu_mobile_STATUS=0;

    $('body').on('click','.btn_menu',()=>{

        $('.menu_mobile').toggleClass('menu_mobile_off');

        if(menu_mobile_STATUS==0){
            wrapperOn();
            menu_mobile_STATUS=1;
        }else{
            wrapperOff();
            menu_mobile_STATUS=0;
        }


    })





});