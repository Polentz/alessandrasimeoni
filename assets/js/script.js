const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", () => {
    documentHeight();
});
// window.addEventListener("resize", documentHeight)
// documentHeight();

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

const openOnClick = () => {
    const header = document.querySelectorAll(".title");
    const about = document.getElementById("about");
    const main = document.querySelector(".main");
    const close = document.querySelector(".close")
    header.forEach(element => {
        element.addEventListener("click", () => {
            about.style.display = "block";
            main.style.display = "none";
            canvas.style.opacity = "0";
        });
    });
    close.addEventListener("click", () => {
        about.style.display = "none";
        main.style.display = "block";
        canvas.style.opacity = "1";
    })
};
openOnClick();

const hoverEffect = () => {
    const elements = document.querySelectorAll(".hover h1, .hover a, .hover p");
    const container = document.querySelectorAll(".content");
    elements.forEach(el => {
        const parent = el.parentElement
        el.addEventListener("mouseenter", () => {
            parent.classList.add("underline");

        });
        el.addEventListener("mouseleave", () => {
            parent.classList.remove("underline");
        });
    });
};
hoverEffect();

const scrollSection = document.querySelector(".scroll");
const infiniteLoopScroll = () => {
    const maxScroll = scrollSection.scrollHeight - scrollSection.clientHeight;
    const currentScroll = scrollSection.scrollTop;
    const offset = 100;
    if (currentScroll + offset >= maxScroll) {
        for (let i = 0; i < 1; i++) {
            const ul = document.querySelector(".content");
            const newUl = ul.cloneNode(true);
            const container = document.querySelector(".main");
            container.appendChild(newUl);
        };
    };

    // SCROLL TO TOP SOLUTION (NO CLONE)
    // if (currentScroll >= maxScroll) {
    //     scrollSection.scrollTo(0, 0);
    // };
};
scrollSection.addEventListener("scroll", () => {
    infiniteLoopScroll();
    openOnClick();
    hoverEffect();
});




