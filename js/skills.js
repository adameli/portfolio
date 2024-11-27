

const skillsData = [
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        language: "Javsscript",
        text: "Crafting interactive and engaging experiences, from dynamic user interfaces to complex algorithms."
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
        language: "HTML",
        text: "The structure of web pages, ensuring accessibility and semantic markup for seamless user experiences."
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
        language: "CSS",
        text: "Styling and animating elements to create visually stunning and responsive designs."
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        language: "PHP",
        text: "Building robust backends, handle form submissions, interact with databases, and create dynamic web applications."
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        language: "C#",
        text: "Developing desktop and web-applications, leveraging its strong typing and extensive framework."
    },
    {
        img: "./resources/d3.svg",
        language: "D3",
        text: "Visualizing data in captivating ways, from simple charts to interactive visualizations, unlocking insights and engaging audiences."
    },
    {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        language: "Three.js",
        text: "Three.js is a JavaScript library  used to create and display animated 3D computer graphics in a web browser using WebGL"
    }
]



const scrollerInner = document.querySelector('.inner-scroller');

skillsData.forEach(object => {
    scrollerInner.innerHTML +=
        `
        <div class="skill-box">
            <img
                src="${object.img}" />
            <h3>${object.language}</h3>
            <p>${object.text}</p>
            <div class="white-line-figure" id="line-skill-box"></div>
        </div>
    `
})

const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    scrollerInner.appendChild(duplicatedItem);
})
