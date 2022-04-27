var $cursor = $(".cursor");

function moveCursor(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY,
      opacity: 1,
    },
  });
}

$(window).on("mousemove", moveCursor);

var $contain_cursor = $(".contain_cursor");

function moveContain_cursor(e) {
  TweenLite.to($contain_cursor, 0.7, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
  });
}
$(window).on("mousemove", moveContain_cursor);

var $point = $(".pointer");

function movePoint(e) {
  TweenLite.to($point, 0, {
    css: {
      left: e.pageX,
      top: e.pageY,
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
    TweenLite.to($point, 0.3, { width: "20px", height: "20px" });
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

//      $(window).on('mousewheel DOMMouseScroll', function(e) {
//   var dir,
//       amt = 100;

//   e.preventDefault();
//   if(e.type === 'mousewheel') {
//     dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
//   }
//   else {
//     dir = e.originalEvent.detail < 0 ? '-=' : '+=';
//   }

//   $('html, body').stop().animate({
//     scrollTop: dir + amt
//   },500, 'linear');
// })


TweenMax.staggerTo(".scroll_anime",1,{
    scale:1,
    y: 90,
    height:0,
    ease: Power1.easeInOut,
    yoyo:true,
    repeat:-1,
});