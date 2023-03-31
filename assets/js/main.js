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
    formbutton("create", {
        action: "https://formspree.io/f/mpzejovg",
        styles: {
            fontFamily: '"Lato", sans-serif',
            button: {
                background: "#729E92"
            },
            title: {
                background: "#729E92",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
            }
        },
        buttonImg: "<i class='fa-solid fa-message' style='font-size:28px'/>",
        fields: [{
            name: "name",
            type: "text",
            label: "Your Name",
            placeholder: "Your name",
            required: true,
        },
        {
            name: "email",
            type: "email",
            label: "Your Email",
            placeholder: "Your Email",
            required: true
        },
        {
            name: "Message",
            type: "textarea",
            placeholder: "Message me!",
        },
        {
            type: "submit"
        }]
    })

    //show portfolio item info
    $(".portfolio-item").click(function () {
        $(this).find(".portfolio-info").slideToggle();
    });

})