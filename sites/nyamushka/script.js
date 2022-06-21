$(document).ready(function () {
  
  $(".wrapper__item_one").mouseleave(function () {
    $(".wrapper__item_one").toggleClass("wrapper__item_hover");
    return false;
  });
  $(".wrapper__item_two").mouseleave(function () {
    $(".wrapper__item_two").toggleClass("wrapper__item_hover");
    return false;
  });


  $(".wrapper__item_one").mouseleave(function () {
    $(".item__content_one").toggleClass("item__content_hover");
    return false;
  });
  $(".wrapper__item_two").mouseleave(function () {
    $(".item__content_two").toggleClass("item__content_hover");
    return false;
  });

  $(".wrapper__item_one").mouseleave(function () {
    $(".item__weight_one").toggleClass("item__weight_hover");
    return false;
  });
  $(".wrapper__item_two").mouseleave(function () {
    $(".item__weight_two").toggleClass("item__weight_hover");
    return false;
  });


  // 

  $(".wrapper__item_one").click(function () {
    $(".wrapper__item_one").toggleClass("wrapper__item_hover");
    return false;
  });
  $(".wrapper__item_two").click(function () {
    $(".wrapper__item_two").toggleClass("wrapper__item_hover");
    return false;
  });

  $(".wrapper__item_one").click(function () {
    $(".item__content_one").toggleClass("item__content_hover");
    return false;
  });
  $(".wrapper__item_two").click(function () {
    $(".item__content_two").toggleClass("item__content_hover");
    return false;
  });

  $(".wrapper__item_one").click(function () {
    $(".item__weight_one").toggleClass("item__weight_hover");
    return false;
  });
  $(".wrapper__item_two").click(function () {
    $(".item__weight_two").toggleClass("item__weight_hover");
    return false;
  });


});
