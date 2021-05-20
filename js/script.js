
// orange fish move to position while clicking
$(document).on("click", function (e) {
  $("#fish1Id").stop();
  let x = e.pageX - 80;
  let y = e.pageY - 80;
  $("#fish1Id").stop();
  $("#fish1Id").animate({ left: x, top: y });
  $("#fish1Id").myfunction();
});



// // increasing the size of orange fish while clicking
$("#fish1Id").on("dblclick", function () {
  $("#fish1Id").stop(); 
  $("#fish1Id")
    .animate({
      height: "+=30",
      width: "+=30",
    }),
    $("#fish1Id").animate({
      height: "-=30",
      width: "-=50",
    });
    $("#fish1Id").stop();
    $("#fish1Id").css({
      height: "250",
      width: "250",
    });
    $("#fish1Id").myfunction();

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
    let forWidth = Math.floor(Math.random() * w + 1);
    $(this).animate(
      {
        left: forWidth,
        top: forHeight,
      },
      6000,
    function(){
      $("#fish1Id").stop();
      $("#fish1Id").myfunction();
      $("#fish2Id").myfunction();
    }
    );
};
 })
(jQuery);
$("#fish1Id").myfunction();
$("#fish2Id").myfunction();

// FUnction to remove bubbles

(function ($) {
  $.fn.removing = function () {
    $(this).on("click", function () {
      $(this).stop();
      bubbleAnimation($(this));
$(this).removing();


      
    });
  };
})(jQuery);



function bubbleAnimation(bubble){
  let w = $(window).width();
  let forWidth = Math.floor(Math.random() * w + 1) + 100;
  let forTime = Math.floor(Math.random()*(10000-6000)) + 6000;
  let pleDont = forWidth
  bubble
  .css({top:$(window).height()+100, left:forWidth})
  .animate({top:-100,pleDont},forTime,function(){
    bubbleAnimation(bubble);
  });
}

$("#bubble3Id").removing();
$("#bubble2Id").removing();
$("#bubble1Id").removing();
bubbleAnimation($("#bubble1Id"));

bubbleAnimation($("#bubble2Id"));

bubbleAnimation($("#bubble3Id"));