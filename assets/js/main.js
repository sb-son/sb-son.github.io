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

    //an array of projects that makes use of svgs in svg.js
    const projects = [
        {
            id: 'sandlot-connect',
            svg: createSandlotConnectSvg(),
            desc: `Project Name: Sandlot Connect\n
             Sandlot Connect is a social media platform inspired by the grassroots resurgence of sandlot baseball across Texas and beyond. Within this web application, users can create a new baseball team or request to join an existing team. When a user creates a new team they have access to requests and can approve or dismiss requests to join the team. Once on a team, members have a private space where they can make a post and communicate with group members. The application is built using Java and Spring Boot on the back-end, with Thymeleaf for the front-end.`
        },
        {
            id: 'movie-project',
            svg: createMovieProjectSvg(),
            desc: `Project Name: Movie Project\n
                    This project is a movie application that allows users to add, edit, and delete movies, as well as rate them. It features a user-friendly interface and integrates with OMDB API for movie posters. The app is built with HTML, CSS, JavaScript, and jQuery for a responsive user experience and uses fetch API and RESTful APIs to communicate with a server for storage of movie data.`
        },
        {
            id: 'weather-map',
            svg: createWeatherMapSvg(),
            desc: `Project Name: Weather Map\n
                    This project is a movie application that allows users to add, edit, and delete movies, as well as rate them. It features a user-friendly interface and integrates with OMDB API for movie posters. The app is built with HTML, CSS, JavaScript, and jQuery for a responsive user experience and uses fetch API and RESTful APIs to communicate with a server for storage of movie data.`
        }
    ];

    projects.forEach(project => {
        const listItem = $(`<li class="svg-container-${project.id} d-grid">`)
        listItem.html(project.svg);
        listItem.append(`<p>${project.desc}</p>`);
        $('.portfolio-container ul').append(listItem)

    })

    $('.sandlot-connect-info').click(function () {

    })
})