$(document).ready(function () {
  $subscribeForm = $(".list-subscribe__item");
  $subscribeForm.on("click", function () {
    //при клике все блоки скрываем
    $(".list-subscribe__about").css("display", "none");
    // текущий блок отображаем
    $(this).find(".list-subscribe__about").css("display", "block");
    // ставим маркер checked на текущий инпут
    $(this).find('input[type="radio"]')[0].checked = true;
  });

  // если 2 формы рассматривать как разные

  // $('.subscribe__form .list-subscribe__item').on('click',function(){
  //     $('.subscribe__form .list-subscribe__about').css('display','none');
  //     $(this).find('input[name="subscribe"]')[0].checked = true;
  //    $(this).find('.list-subscribe__about').css('display', 'block');
  // })
  // $('.subscribe-period__form .list-subscribe__item').on('click',function(){
  //     console.log($('.subscribe-period__form .list-subscribe__about').css('display','none'));
  //     $(this).find('input[name="period"]')[0].checked = true;
  //    $(this).find('.list-subscribe__about').css('display', 'block');
  // })
  $formChangeButton = $(".form-payment__change"); // кнопка "изменить"
  $unsubForm = $(".form-payment__unsub"); // форма "отписаться"

  $notificationForm = $("#notification-form");
  $unsubButtonClose = $(".notification-form__cancel");
  $notificationContent = "notification-form"; //контент формы уведомления_1

  $unsubContent = "unsubscribe-form"; // контент формы 'отписаться'
  $cancelBtn = $(".cross"); // кнопка закрытия форм
  $show = "show"; // класс, который добавляется при нажатии кнопки изменить\

  $completedForm = $("#completed-form"); // уведомление изменения тарифного плана
  $completedContent = "completed-form";

  $formChangeButton.on("click", function (e) {
    e.preventDefault();
      $unsubForm.addClass($show);
  });
  $cancelBtn.on("click", function () {
    $unsubForm.removeClass($show);
    $notificationForm.removeClass($show);
    $completedForm.removeClass($show);
  });
  $unsubForm.on("click", function (e) {
    e.target.id == $unsubContent ? $unsubForm.removeClass($show) : false;
  });

  $notificationForm.on("click", function (e) {
    e.target.id == $notificationContent
      ? $notificationForm.removeClass($show)
      : false;
  });
  $unsubButtonClose.on("click", function () {
    $notificationForm.removeClass($show);
  });

  $completedForm.on("click", function (e) {
    e.target.id == $completedContent
      ? $completedForm.removeClass($show)
      : false;
  });
});
