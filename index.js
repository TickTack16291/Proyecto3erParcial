const gallery = document.querySelector("#MasVisitados");
const viewport = gallery?.querySelector(".gallery-viewport");
const prevButton = gallery?.querySelector(".gallery-btn.prev");
const nextButton = gallery?.querySelector(".gallery-btn.next");

const updateButtons = () => {
    if (!viewport || !prevButton || !nextButton) {
        return;
    }
    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    prevButton.disabled = viewport.scrollLeft <= 0;
    nextButton.disabled = viewport.scrollLeft >= maxScrollLeft - 1;
};

const scrollByPage = (direction) => {
    if (!viewport) {
        return;
    }
    viewport.scrollBy({
        left: direction * viewport.clientWidth,
        behavior: "smooth",
    });
};

prevButton?.addEventListener("click", () => scrollByPage(-1));
nextButton?.addEventListener("click", () => scrollByPage(1));
viewport?.addEventListener("scroll", updateButtons);
window.addEventListener("load", updateButtons);
window.addEventListener("resize", updateButtons);
