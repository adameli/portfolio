"use strict"

const scrollerInner = document.querySelector(".innerScroller");
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    scrollerInner.appendChild(duplicatedItem);
})


document.getElementById("navProject").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('projects').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})
document.getElementById("navAbout").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('about').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})

document.getElementById("learn-more-about").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('about').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})

document.getElementById("navContact").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('contact').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})

const heroWrapper = document.querySelector('.heroContentWrapper');
const projectBoxes = document.querySelectorAll('.projectBox');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const dataset = entry.target.dataset.id;
        console.log(entry.target.dataset.id);
        if (entry.intersectionRatio <= 0) return
        switch (dataset) {
            case 'hero':
                entry.target.classList.add('show');
                break;
            case 'project':
                entry.target.classList.add('show-projects');
                break;
        }
    });
}, {
    // threshold: .5,
    rootMargin: '100px'
});

observer.observe(heroWrapper);
projectBoxes.forEach(box => observer.observe(box));


// window.addEventListener("scroll", setScrollVar)
// window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
}

// setScrollVar()

