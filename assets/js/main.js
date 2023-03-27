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

    window.formbutton = window.formbutton || function () {
        (formbutton.q = formbutton.q || []).push(arguments)
    };
    formbutton("create", {action: "https://formspree.io/f/mpzejovg"})
    let form = document.getElementById("my-form");

    document.querySelectorAll('.next-section-btn').forEach((button, index, buttons) => {
        button.addEventListener('click', () => {
            const currentSection = button.parentElement.parentElement;
            const nextSection = currentSection.nextElementSibling;

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     let status = document.getElementById("my-form-status");
    //     let data = new FormData(event.target);
    //     fetch(event.target.action, {
    //         method: form.method,
    //         body: data,
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     }).then(response => {
    //         if (response.ok) {
    //             status.innerHTML = "Thanks for your submission!";
    //             form.reset()
    //         } else {
    //             response.json().then(data => {
    //                 if (Object.hasOwn(data, 'errors')) {
    //                     status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    //                 } else {
    //                     status.innerHTML = "Oops! There was a problem submitting your form"
    //                 }
    //             })
    //         }
    //     }).catch(error => {
    //         status.innerHTML = "Oops! There was a problem submitting your form"
    //     });
    // }
    // form.addEventListener("submit", handleSubmit)
})