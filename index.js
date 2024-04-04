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


