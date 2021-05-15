// orange fish move to position while clicking
$("html").on("click", function (e) {
  let x = e.pageX - 80;
  let y = e.pageY - 80;
  $("#fish1Id").animate({ left: x, top: y });
  console.log(x);
});

// increasing the size of orange fish while clicking
$("#fish1Id").on("dblclick", function () {
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
});

// for blue fish
$("#fish2Id").on("mouseover", function () {
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
});
function a() {
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
}

// need to do
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
$("#fish2Id").myfunction();
$("#fish1Id").myfunction();

// making 3 bubbles
(function ($, a) {
  $.fn.bubbles = function () {
    let h = $(document).height() - 150;
    let w = $(document).width() - 150;
    let forWidth = w * a;
    $(this).animate({
      top: forHeight,
    });
  };
});
