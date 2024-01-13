"use strict"

const dotsFigure = document.querySelector("figure");
const figureArray = [[14, 13, 22, 31, 41, 51, 61, 72, 83, 84, 85, 86, 77, 68, 58, 48, 38, 27, 16, 15], [14, 13, 12, 11, 21, 31, 41, 51, 61, 71, 81, 82, 83, 84, 85, 86, 87, 88, 78, 68, 58, 48, 38, 28, 18, 17, 16, 15], [3, 4, 5, 6, 16, 26, 36, 37, 38, 39, 49, 59, 69, 68, 67, 66, 76, 86, 96, 95, 94, 93, 83, 73, 63, 62, 61, 60, 50, 40, 30, 31, 32, 33, 23, 13]];

for (let i = 0; i <= 100; i++) {
    let dot = document.createElement("div");
    dot.id = i;
    dot.classList.add("dot")
    dotsFigure.append(dot)
}

function changeFigure(numbers) {
    let dots = Array.from(document.querySelectorAll(".dot"));
    dots.forEach(dot => {
        if (numbers.includes(parseInt(dot.id))) {
            dot.style.backgroundColor = "#5F49F2";
        } else {
            dot.style.backgroundColor = "#E0E0E0";
        }
    })
}

changeFigure(figureArray[2])

let chape = 0
// setInterval(() => {
//     changeFigure(figureArray[chape])
//     chape++

//     if (chape === figureArray.length) {
//         chape = 0;
//     }
// }, 2000);

const scrollerInner = document.querySelector(".innerScroller");
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    scrollerInner.appendChild(duplicatedItem);
})

document.getElementById("classcode").addEventListener("click", function () { window.location.href("https://wdu.maumt.se/ht22/bed_bird/ClassCode/") })
