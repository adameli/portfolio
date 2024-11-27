const projects = [
    {
        id: "classcode",
        imgSrc: "resources/projectImages/classcode.png",
        tags: ["Development", "Algoritms", "Team", "Website"],
        title: "ClassCode",
        link: "https://wdu.maumt.se/ht22/bed_bird/ClassCode/"
    },
    {
        id: "connectfour",
        imgSrc: "resources/projectImages/connect-four.png",
        tags: ["Development", "Algoritms", "Game"],
        title: "Connect Four",
        link: "https://adameli.github.io/connectfour/"
    },
    {
        id: "vemkanmest",
        imgSrc: "resources/projectImages/vem-kan-mest.jpg",
        tags: ["Development", "Game", "Team", "Figma"],
        title: "Vem kan mest?",
        link: "https://students.maumt.se/WDU22/wilma/vemkanmest/"
    },
    {
        id: "sydstil",
        imgSrc: "resources/projectImages/sydstil.png",
        tags: ["Development", "UI", "Business"],
        title: "Syd Stil",
        link: "https://sydstil.se/"
    },
    {
        id: "visualisering",
        imgSrc: "resources/projectImages/visualisering.jpg",
        tags: ["Development", "UI", "D3", "Data"],
        title: "Datavisualisering",
        link: "https://thardemo.com/app/visualisering/"
    },
    {
        id: "pasprang",
        imgSrc: "resources/projectImages/pasprang.png",
        tags: ["Team", "UI", "Mobile", "Game"],
        title: "På Språng",
        link: "https://students.maumt.se/WDU22/wilma/pasprang/"
    }
];

const projectGrid = document.querySelector('.project-grid')
console.log(projectGrid);

projects.forEach(project => {
    projectGrid.innerHTML += `
         <div data-id="project" class="project-box" id=${project.id}>
                <a href=${project.link} target="_blank">
                    <img src=${project.imgSrc} alt="">
                    <div class="project-info">
                        <ul class="tags">
                        ${project.tags.map(tag => `<li>${tag}</li>`)}
                        </ul>
                        <p class="project-box-title">${project.title}</p>
                    </div>
                </a>
            </div>
    `
})