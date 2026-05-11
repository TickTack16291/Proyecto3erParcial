const bodies = {
    saturno: {
        name: "Saturno",
        hero: "El gigante gaseoso con los anillos mas conocidos del sistema solar.",
        description:
            "Saturno es el sexto planeta desde el Sol y el segundo mas grande. Su atmosfera esta compuesta principalmente de hidrogeno y helio, con vientos intensos y un sistema de anillos formado por hielo y roca.",
        image: "Saturno.png",
        facts: [
            "Sus anillos estan hechos de millones de fragmentos de hielo.",
            "Tiene mas de 80 lunas conocidas, incluyendo a Titan.",
            "Un dia en Saturno dura cerca de 10.7 horas.",
            "Es tan ligero que podria flotar en agua si existiera un oceano suficiente.",
        ],
        gallery: [
            { src: "Saturno.png", caption: "Saturno y sus anillos en primer plano." },
            { src: "Titan.jpg", caption: "Titan, la luna mas grande de Saturno." },
            { src: "sistemasolar.png", caption: "Saturno dentro del sistema solar." },
            { src: "Jupiter.png", caption: "Comparacion con otros gigantes gaseosos." },
        ],
    },
    tierra: {
        name: "Tierra",
        hero: "Nuestro hogar azul y el unico planeta conocido con vida.",
        description:
            "La Tierra es el tercer planeta desde el Sol. Posee una atmosfera rica en nitrogeno y oxigeno, gran cantidad de agua liquida y una diversidad de ecosistemas unica en el sistema solar.",
        image: "Tierra.png",
        facts: [
            "El 71% de su superficie esta cubierta por oceanos.",
            "Completa una orbita alrededor del Sol en 365 dias.",
            "Su nucleo metalico ayuda a generar el campo magnetico.",
            "La Luna estabiliza la inclinacion de su eje.",
        ],
        gallery: [
            { src: "Tierra.png", caption: "La Tierra vista desde el espacio." },
            { src: "Luna.jpg", caption: "La Luna, satelite natural de la Tierra." },
            { src: "sistemasolar.png", caption: "La Tierra en el contexto del sistema solar." },
            { src: "Marte.jpg", caption: "Comparacion con Marte, su vecino rojo." },
        ],
    },
    jupiter: {
        name: "Jupiter",
        hero: "El gigante gaseoso con la gran mancha roja.",
        description:
            "Jupiter es el planeta mas grande del sistema solar. Su atmosfera esta dominada por hidrogeno y helio, con tormentas permanentes como la gran mancha roja.",
        image: "Jupiter.png",
        facts: [
            "Tiene un sistema de anillos tenue y dificil de ver.",
            "Su campo magnetico es el mas intenso de los planetas.",
            "Un dia en Jupiter dura cerca de 9.9 horas.",
            "Posee mas de 90 lunas conocidas.",
        ],
        gallery: [
            { src: "Jupiter.png", caption: "Jupiter en detalle con sus bandas." },
            { src: "Saturno.png", caption: "Comparacion con Saturno." },
            { src: "sistemasolar.png", caption: "Jupiter en el sistema solar." },
            { src: "Marte.jpg", caption: "Vecinos interiores del sistema solar." },
        ],
    },
};

const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) {
        node.textContent = value;
    }
};

const setImage = (selector, value, altText) => {
    const node = document.querySelector(selector);
    if (node && value) {
        node.src = value;
        if (altText) {
            node.alt = altText;
        }
    }
};

const applyFacts = (facts) => {
    if (!facts || facts.length === 0) {
        return;
    }
    const cards = document.querySelectorAll(".fact-card");
    cards.forEach((card, index) => {
        const text = facts[index];
        if (!text) {
            return;
        }
        const paragraph = card.querySelector("p");
        if (paragraph) {
            paragraph.textContent = text;
        }
    });
};

const applyGallery = (gallery) => {
    if (!gallery || gallery.length === 0) {
        return;
    }
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
        const entry = gallery[index];
        if (!entry) {
            return;
        }
        const image = item.querySelector("img");
        const caption = item.querySelector("figcaption");
        if (image) {
            image.src = entry.src;
            image.alt = entry.caption || "Galeria";
        }
        if (caption && entry.caption) {
            caption.textContent = entry.caption;
        }
    });
};

const loadBodyContent = () => {
    const params = new URLSearchParams(window.location.search);
    const key = (params.get("body") || "").toLowerCase();
    const data = bodies[key];

    if (!data) {
        return;
    }

    setText("#heroTitle", data.name);
    setText("#heroDescription", data.hero);
    setText("#bodyDescription", data.description);
    setImage("#heroImage", data.image, `Imagen de ${data.name}`);
    document.title = `Contenido de ${data.name}`;

    applyFacts(data.facts);
    applyGallery(data.gallery);
};

window.addEventListener("DOMContentLoaded", loadBodyContent);
