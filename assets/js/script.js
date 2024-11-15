const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const openOnClick = () => {
    const header = document.querySelectorAll(".title, .contact");
    const about = document.getElementById("about");
    const main = document.querySelector(".main");
    const closeBtns = document.querySelectorAll(".close");
    header.forEach(element => {
        element.addEventListener("click", () => {
            about.style.display = "block";
            main.style.display = "none";
        });
    });
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            about.style.display = "none";
            main.style.display = "block";
        });
    });
};

const hoverEffect = () => {
    const elements = document.querySelectorAll(".hover h1, .hover a, .hover p");
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleMediaQuery = (e) => {
        if (e.matches) {
            return false
        } else {
            elements.forEach(el => {
                const parent = el.parentElement
                el.addEventListener("mouseenter", () => {
                    parent.classList.add("underline");

                });
                el.addEventListener("mouseleave", () => {
                    parent.classList.remove("underline");
                });
                el.addEventListener("touchstart", () => {
                    if (parent.classList.contains("underline")) {
                        parent.classList.remove("underline");
                    };
                });
            });
        };
    };
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
};

const playaudio = () => {
    const button = document.querySelector(".circle");
    const svg = document.querySelector(".circle svg");
    const audio = document.getElementById("audio");
    button.addEventListener("click", () => {
        svg.classList.add("play");
        if (audio.paused) {
            audio.play();
            svg.classList.add("play");
        } else {
            audio.pause();
            svg.classList.remove("play");
        };
    });
    audio.addEventListener("timeupdate", () => {
        if (audio.duration === audio.currentTime) {
            svg.classList.remove("play");
        };
    });
};

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

const split = (domElement) => {
    let words = domElement.textContent.split(' ');
    words = words.map(word => {
        let letters = word.split('');
        letters = letters.map(letter => `<span class="letter">${letter}</span>`);
        return letters.join('');
    });
    domElement.innerHTML = words.join(' ');
};

const splitTitle = (element, content) => {
    let div = document.createElement("div");
    div.classList.add("word");
    let text = document.createTextNode(content);
    div.appendChild(text);
    element.appendChild(div);
    split(div);
};

document.querySelectorAll(".content-list h1, .content-list span, .content-list a").forEach(title => {
    const thisContent = title.dataset.name;
    splitTitle(title, thisContent);
});

document.addEventListener("mousemove", (event) => {
    const x = event.pageX
    const y = event.pageY
    document.querySelectorAll(".letter").forEach(letter => {
        const dx = (letter.offsetLeft + 50) - x;
        const dy = (letter.offsetTop + 50) - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const score = Math.exp(dist * -0.003);
        letter.style.fontWeight = 100 + (100 * Math.floor(8 * score));
    });
});

window.addEventListener("load", () => {
    documentHeight();
    openOnClick();
    playaudio();
});

window.addEventListener("resize", () => {
    documentHeight();
});




