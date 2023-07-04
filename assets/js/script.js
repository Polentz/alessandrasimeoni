const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", () => {
    documentHeight();
});

const openOnClick = () => {
    const header = document.querySelectorAll(".title");
    const about = document.getElementById("about");
    const main = document.querySelector(".main");
    const close = document.querySelector(".close");
    header.forEach(element => {
        element.addEventListener("click", () => {
            about.style.display = "block";
            main.style.display = "none";
        });
    });
    close.addEventListener("click", () => {
        about.style.display = "none";
        main.style.display = "block";
    });
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

const playaudio = () => {
    const button = document.querySelector(".circle");
    const content = document.querySelectorAll(".content")
    button.addEventListener("mouseenter", () => {
        content.forEach(c => {
            c.classList.add("background")
        });
    });
    button.addEventListener("mouseleave", () => {
        content.forEach(c => {
            c.classList.remove("background")
        });
    });
};
// playaudio();

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
};

scrollSection.addEventListener("scroll", () => {
    infiniteLoopScroll();
    openOnClick();
    hoverEffect();
    playaudio();
});




