"use strict";
$(document).ready(function () {
    //bootstrap tooltips
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //icon animation
    const icons = $('.icon');
    icons.mouseover(function () {
        const icon = $(this);
        icon.addClass('fa-shake');
        setTimeout(() => {
            icon.removeClass('fa-shake');
        }, 800)
    })

    //for contact form
    window.formbutton = window.formbutton || function () {
        (formbutton.q = formbutton.q || []).push(arguments)
    };
    formbutton("create", {action: "https://formspree.io/f/mpzejovg"})


})