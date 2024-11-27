"use strict"

let isPhoneSize = false
const journeyContainers = document.querySelectorAll('.journey-container')
const stickeyContainers = document.querySelectorAll('.journey-container .grid-2-columns')
console.log(journeyContainers);
console.log(stickeyContainers);



window.addEventListener("resize", windowSize)
windowSize()

function windowSize() {
    if (window.innerWidth < 1023) {
        isPhoneSize = true
        stickeyContainers.forEach(element => element.classList.remove('sticky-container'))
        journeyContainers.forEach(element => element.classList.remove('height'))
    } else {
        stickeyContainers.forEach(element => element.classList.add('sticky-container'))
        journeyContainers.forEach(element => element.classList.add('height'))

    }
}



document.getElementById("nav-project").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('projects').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})
document.getElementById("nav-about").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('hockey').offsetTop,
        left: 100,
        behavior: "smooth",
    });

})

document.getElementById("nav-contact").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementById('contact').offsetTop,
        left: 100,
        behavior: "smooth",
    });

    document.getElementById("learn-more-about").addEventListener("click", (e) => {
        window.scroll({
            top: document.getElementById('about').offsetTop,
            left: 100,
            behavior: "smooth",
        });

    })


})

const heroWrapper = document.querySelector('.hero-content-container');
const projectBoxes = document.querySelectorAll('.project-box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const dataset = entry.target.dataset.id;
        if (entry.intersectionRatio <= 0) return
        switch (dataset) {
            case 'hero':
                entry.target.classList.add('show');
                break;
            case 'project':
                entry.target.classList.add('show-projects');
                break;
            case 'hockey':
                if (isPhoneSize) startImageSlideshow(entry.target, 3000)
                startImageScroll(entry.target, 'hockey');

                break;
            case 'military':
                if (isPhoneSize) startImageSlideshow(entry.target, 3000)
                startImageScroll(entry.target, 'military');
                break;

        }
    });
}, {
    // threshold: .5,
    rootMargin: '100px'
});

observer.observe(heroWrapper);
projectBoxes.forEach(box => observer.observe(box));
observer.observe(document.querySelector('#hockey-observer'));
observer.observe(document.querySelector('#military-observer'));

function startImageSlideshow(targetElement, interval = 3000) {
    const images = targetElement.querySelectorAll('.image');
    const totalImages = images.length;

    let currentIndex = 0; // Track the current active image
    let slideshowInterval; // Store the interval ID for stopping if needed

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function startSlideshow() {
        showImage(currentIndex); // Show the current image

        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages; // Loop back to 0 after the last image
            showImage(currentIndex);
        }, interval);
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval); // Stops the slideshow
    }

    startSlideshow(); // Start the slideshow on function call

    return {
        stop: stopSlideshow, // Expose a way to stop the slideshow
        start: startSlideshow, // Expose a way to restart the slideshow
    };
}

function startImageScroll(targetElement, parent) {
    const parentSection = document.getElementById(parent)
    const images = targetElement.querySelectorAll('.image');
    const totalImages = images.length;

    function handleScroll() {
        const rect = parentSection.getBoundingClientRect();
        const progress = Math.min(Math.max(0, -rect.top / rect.height), 1); // 0 to 1

        const activeIndex = Math.floor(progress * totalImages);
        const isLastImage = activeIndex === totalImages - 1;

        images.forEach((img, index) => {
            img.classList.toggle('active', index === activeIndex);
        });

        // Extend the visibility of the last image before transitioning
        if (isLastImage && progress >= 0.6) {
            const lastImage = images[totalImages - 1];
            lastImage.classList.add('active');

            document.body.classList.remove('in-hockey');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
}

// window.addEventListener("scroll", setScrollVar)

// function setScrollVar() {
//     const htmlElement = document.documentElement;
//     const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
//     // console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
//     console.log(percentOfScreenHeightScrolled);

//     htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
// }

// setScrollVar()