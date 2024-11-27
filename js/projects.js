const projects = [
    {
        id: "classcode",
        imgSrc: "resources/projectImages/classcode.png",
        tags: ["Team project", "Website", "PHP", "JS"],
        title: "ClassCode",
        link: "https://wdu.maumt.se/ht22/bed_bird/ClassCode/"
    },
    {
        id: "connectfour",
        imgSrc: "resources/projectImages/connect-four.png",
        tags: ["Development", "Game", "JS"],
        title: "Connect Four",
        link: "https://adameli.github.io/connectfour/"
    },
    {
        id: "vemkanmest",
        imgSrc: "resources/projectImages/vem-kan-mest.jpg",
        tags: ["Team project", "Game", "Figma", "PHP", "JS"],
        title: "Vem kan mest?",
        link: "https://students.maumt.se/WDU22/wilma/vemkanmest/"
    },
    {
        id: "sydstil",
        imgSrc: "resources/projectImages/sydstil.jpg",
        tags: ["Development", "UI/UX", "Business"],
        title: "Syd Stil",
        link: "https://sydstil.se/"
    },
    {
        id: "visualisering",
        imgSrc: "resources/projectImages/visualisering.jpg",
        tags: ["Team project", "UI/UX", "D3", "Data visualization"],
        title: "Datavisualisering",
        link: "https://thardemo.com/app/visualisering/"
    },
    {
        id: "pasprang",
        imgSrc: "resources/projectImages/pasprang.jpg",
        tags: ["Team project", "Mobile", "Game", "PHP", "JS"],
        title: "På Språng",
        link: "https://students.maumt.se/WDU22/wilma/pasprang/"
    }
];

const projectGrid = document.querySelector('.project-grid')


projects.forEach(project => {
    projectGrid.innerHTML += `
         <div data-id="project" class="project-box" id=${project.id}>
                <a href=${project.link} target="_blank">
                    <img src=${project.imgSrc} alt="">
                    <div class="project-info">
                        <ul class="tags">
                            ${project.tags.map(tag => `<li>${tag}</li>`).join('')}
                        </ul>
                        <p class="project-box-title">${project.title}</p>
                    </div>
                </a>
            </div>
    `
})