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
            desc: `<h3>Sandlot Connect</h3>
             <p>Sandlot Connect is a comprehensive social media and team management platform built for baseball enthusiasts. It offers users the ability to create or join a team, manage requests, and communicate privately with teammates.</p>`,
            tech: `<div class="tech">
                    <p>Java</p>
                    <p>Spring Boot</p>
                    <p>Thymeleaf</p>
                    <p>SQL</p>
                    <p>AWS</p>
                    </div>`,
            links: `<div class="links">
                        <a href="https://sandlotconnect.xyz:8080/" target="_blank">Live Site <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                        <a href="https://github.com/Sandlot-Connect/sandlot-connect" target="_blank">Code <i class="fa-brands fa-github icon fa-lg"></i></a>
                    </div>`
        },
        {
            id: 'movie-project',
            svg: createMovieProjectSvg(),
            desc: `<h3>Movie Project</h3>
                    <p>This project is a movie application that allows users to add, edit, and delete movies, as well as rate them. It features a user-friendly interface and integrates with OMDB API for movie posters.</p>`,
            tech: `<div class="tech">
                        <p>Javascript</p>
                        <p>Jquery</p>
                        <p>Bootstrap 5</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>OMDB API</p>
                    </div>`,
            links: `<div class="links">
                        <a href="https://github.com/wilson-hall/movie-project" target="_blank">Code <i class="fa-brands fa-github icon fa-lg"></i></a>
                    </div>`
        },
        {
            id: 'weather-map',
            svg: createWeatherMapSvg(),
            desc: `<h3>Weather Map</h3>
                    <p>Weather Map is an application that provides current weather conditions and a five-day forecast for any location. The application includes a map view and a location search feature, making it easy for users to stay updated on weather conditions.</p>`,
            tech: `<div class="tech">
                        <p>Javascript</p>
                        <p>AJAX</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>OpenWeatherMap API</p>
                        <p>Mapbox API</p>
                    </div>`,
            links: `<div class="links">
                        <a href="https://github.com/sb-son/weathermap" target="_blank">Code <i class="fa-brands fa-github icon fa-lg"></i></a>
                    </div>`
        }
    ];

    projects.forEach((project, index) => {
        const listItem = $(`<li class="svg-container-${project.id} portfolio-item container container-background p-0">`);
        const contentWrapper = $('<div class="content-wrapper">');
        const portfolioContainer = $('.portfolio-container ul');

        contentWrapper.html(project.svg);
        contentWrapper.append(`<div class="portfolio-content d-flex flex-column justify-content-center">${project.desc}${project.tech}${project.links}</div>`);
        listItem.append(contentWrapper);
        portfolioContainer.append(listItem);

        if (index !== projects.length -1) {
            portfolioContainer.append('<hr class="m-0">');
        }
    });

    $('.sandlot-connect-info').click(function () {
        const svgElement = document.getElementById('sandlot-connect-svg')
        console.log(svgElement)
        const group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group1.setAttributeNS(null, "transform", "matrix(1.16 0 0 1 206 215)");
        group1.setAttributeNS(null, "id", "j9lAsksOFOSfoZqwxwS58");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttributeNS(null, "style", "stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;");
        path.setAttributeNS(null, "vector-effect", "non-scaling-stroke");
        path.setAttributeNS(null, "transform", "translate(0, 0)");
        path.setAttributeNS(null, "d", "M -29.74359 8.22419 L -29.74359 0.83744 L -29.74359 0.83744 C -29.74359 -4.16716 -26.2577 -8.22419 -21.95763 -8.22419 L 24.405569999999997 -8.22419 L 24.405569999999997 -8.22419 C 27.353679999999997 -8.22419 29.743599999999997 -5.4427 29.743599999999997 -2.0115600000000002 L 29.743599999999997 8.22419 z");
        path.setAttributeNS(null, "stroke-linecap", "round");

        const group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group2.setAttributeNS(null, "transform", "matrix(1 0 0 1 220 222)");
        group2.setAttributeNS(null, "id", "xtG7amzF024IwXox6heX-");

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttributeNS(null, "font-family", "Open Sans");
        text.setAttributeNS(null, "font-size", "8");
        text.setAttributeNS(null, "font-style", "normal");
        text.setAttributeNS(null, "font-weight", "normal");
        text.setAttributeNS(null, "line-height", "1");

        text.setAttributeNS(null, "style", "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS(null, "x", "-32.72");
        tspan.setAttributeNS(null, "y", "-3.97");
        tspan.textContent = "More Info";

        // Append the elements to the SVG
        text.appendChild(tspan);
        group2.appendChild(text);
        group1.appendChild(path);
        svgElement.appendChild(group1);
        svgElement.appendChild(group2);
        $(this).remove()
    })

    $('.movie-project-info').click(function () {
        const svgElement = document.getElementById('movie-project-svg')
        const group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group1.setAttributeNS(null, "transform", "matrix(1.16 0 0 1 206 215)");
        group1.setAttributeNS(null, "id", "j9lAsksOFOSfoZqwxwS58");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttributeNS(null, "style", "stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;");
        path.setAttributeNS(null, "vector-effect", "non-scaling-stroke");
        path.setAttributeNS(null, "transform", "translate(0, 0)");
        path.setAttributeNS(null, "d", "M -29.74359 8.22419 L -29.74359 0.83744 L -29.74359 0.83744 C -29.74359 -4.16716 -26.2577 -8.22419 -21.95763 -8.22419 L 24.405569999999997 -8.22419 L 24.405569999999997 -8.22419 C 27.353679999999997 -8.22419 29.743599999999997 -5.4427 29.743599999999997 -2.0115600000000002 L 29.743599999999997 8.22419 z");
        path.setAttributeNS(null, "stroke-linecap", "round");

        const group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group2.setAttributeNS(null, "transform", "matrix(1 0 0 1 220 222)");
        group2.setAttributeNS(null, "id", "xtG7amzF024IwXox6heX-");

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttributeNS(null, "font-family", "Open Sans");
        text.setAttributeNS(null, "font-size", "8");
        text.setAttributeNS(null, "font-style", "normal");
        text.setAttributeNS(null, "font-weight", "normal");
        text.setAttributeNS(null, "line-height", "1");

        text.setAttributeNS(null, "style", "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS(null, "x", "-32.72");
        tspan.setAttributeNS(null, "y", "-3.97");
        tspan.textContent = "More Info";

        // Append the elements to the SVG
        text.appendChild(tspan);
        group2.appendChild(text);
        group1.appendChild(path);
        svgElement.appendChild(group1);
        svgElement.appendChild(group2);
        $(this).remove()
    })

    $('.weather-map-info').click(function () {
        const svgElement = document.getElementById('weather-map-svg')
        const group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group1.setAttributeNS(null, "transform", "matrix(1.16 0 0 1 206 215)");
        group1.setAttributeNS(null, "id", "j9lAsksOFOSfoZqwxwS58");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttributeNS(null, "style", "stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;");
        path.setAttributeNS(null, "vector-effect", "non-scaling-stroke");
        path.setAttributeNS(null, "transform", "translate(0, 0)");
        path.setAttributeNS(null, "d", "M -29.74359 8.22419 L -29.74359 0.83744 L -29.74359 0.83744 C -29.74359 -4.16716 -26.2577 -8.22419 -21.95763 -8.22419 L 24.405569999999997 -8.22419 L 24.405569999999997 -8.22419 C 27.353679999999997 -8.22419 29.743599999999997 -5.4427 29.743599999999997 -2.0115600000000002 L 29.743599999999997 8.22419 z");
        path.setAttributeNS(null, "stroke-linecap", "round");

        const group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group2.setAttributeNS(null, "transform", "matrix(1 0 0 1 220 222)");
        group2.setAttributeNS(null, "id", "xtG7amzF024IwXox6heX-");

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttributeNS(null, "font-family", "Open Sans");
        text.setAttributeNS(null, "font-size", "8");
        text.setAttributeNS(null, "font-style", "normal");
        text.setAttributeNS(null, "font-weight", "normal");
        text.setAttributeNS(null, "line-height", "1");

        text.setAttributeNS(null, "style", "stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS(null, "x", "-32.72");
        tspan.setAttributeNS(null, "y", "-3.97");
        tspan.textContent = "More Info";

        // Append the elements to the SVG
        text.appendChild(tspan);
        group2.appendChild(text);
        group1.appendChild(path);
        svgElement.appendChild(group1);
        svgElement.appendChild(group2);
        $(this).remove()
    })
})