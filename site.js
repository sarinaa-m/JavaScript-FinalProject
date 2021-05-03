// time and date HOME PAGE
// var myDate = new Date();
// document.getElementById('dateTime').innerHTML = myDate.toLocaleDateString('fa');
// document.getElementById('clock').innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

// PAGE SCROLL
window.onscroll = function() {
    personalbar();
};

function personalbar() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;

    var h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    var sc = (scroll / h) * 100;

    document.getElementById("proBar").style.width = sc + "%";
}

// CONTACT PAGE


function checkInfo() {
    var inputName = document.getElementById('inputName');
    var location = document.getElementById('inputLocation');
    var emaill = document.getElementById('inputEmail');
    var phoneNumber = document.getElementById('inputPhone');

    var result = true;
    var infoElements = document.getElementsByClassName('invalid');
    for (const element of infoElements) {
        infoElements.innerHTML = '';
    }

    if (inputName.value === '') {
        inputName.nextElementSibling.innerHTML = "لطفا اطلاعات خود را وارد کنید";
        result = false;

    }
    if (location.value === '') {
        location.nextElementSibling.innerHTML = "لطفا اطلاعات خود را وارد کنید";
        result = false;

    }
    if (emaill.value === '') {
        emaill.nextElementSibling.innerHTML = "لطفا ایمیل خود را وارد کنید";
        result = false;
    }
    if (phoneNumber.value === '') {
        phoneNumber.nextElementSibling.innerHTML = "لطفا شماره تماس خود را وارد کنید";
        result = false;
    }

    if (inputName.value !== '' && emaill.value !== '' && location.value !== '' && phoneNumber.value != '') {
        alert('پیام شما با موفقیت ثبت شد');
    }
    inputName.value = '';
    location.value = '';
    emaill.value = '';
    phoneNumber.value = '';

};
// ABOUT US PAGE
(function() {

    'use strict';
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();