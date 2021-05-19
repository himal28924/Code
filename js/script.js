// orange fish move to position while clicking
$("html").on("click", function (e) {
  $("#fish1Id").stop();
  let x = e.pageX - 80;
  let y = e.pageY - 80;
  $("#fish1Id").animate({ left: x, top: y });
  $("#fish1Id").myfunction();
});

// -----------------------

// (function ($) {
//   $.fn.loop = function () {
//     i = 1;
//     do {
//       $("#fish2Id").myfunction();
//       $("#fish1Id").myfunction();
//       i++;
//     } while (i < 200);
//   };
// });
// (jQuery);

// increasing the size of orange fish while clicking
$("#fish1Id").on("dblclick", function () {
  $("#fish1Id").stop();
  $(this)
    .animate({
      height: "+=30",
      width: "+=30",
    })
    .delay(1000)
    .animate({
      width: "250",
      height: "250",
    });
  $("#fish1Id").myfunction();
  // $("#newFish").append('<img id="fish1Id" src="images/fish1.png" alt="">');
  // $("#fish1Id").myfunction();
});

// for blue fish while hoverning it
$("#fish2Id").on("mouseover", function () {
  $("#fish2Id").stop();
  let h = $(document).height() - 150;
  let w = $(document).width() - 150;
  let forHeight = Math.floor(Math.random() * h + 1);
  150;
  let forWidth = Math.floor(Math.random() * w + 1);
  $(this).animate(
    {
      left: forWidth,
      top: forHeight,
    },
    1000
  );
  $("#fish2Id").myfunction();
});

// moving fish
(function ($) {
  $.fn.myfunction = function () {
    let h = $(document).height() - 150;
    let w = $(document).width() - 150;
    let forHeight = Math.floor(Math.random() * h + 1);
    150;
    let forWidth = Math.floor(Math.random() * w + 1);
    $(this).animate(
      {
        left: forWidth,
        top: forHeight,
      },
      6000
    );
  };
})(jQuery);
// loops remain

//





// Created a "removing"  function for this one
// $("#bubble1Id").click(function(){
//   $("#bubble1Id").stop();
//   $("#bubble1Id").fadeOut();
// });

// FUnction to remove bubbles

(function ($) {
  $.fn.removing = function () {
    $(this).on("click", function () {
      $(this).stop();
      $(this).fadeOut();
    });
  };
})(jQuery);

// bubble 1
a = 2;
do {
  $("#bubble1Id").css({ top: 800, left: 100 });

  $("#bubble1Id").animate({ left: 100, top: -100 }, 6000);

  $("#bubble1Id").removing();

  //     // bubble 2
  $("#bubble2Id").css({ top: 800, left: 300 });
  $("#bubble2Id").animate({ left: 300, top: -100 }, 6000);
  $("#bubble2Id").removing();

  // bubble3
  $("#bubble3Id").css({ top: 800, left: 600 });
  $("#bubble3Id").animate({ left: 600, top: -100 }, 6000);
  $("#bubble3Id").removing();
  a++;
} while (a < 10);
