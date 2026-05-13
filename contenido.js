const bodies = {
    sol: {
        name: "Sol",
        hero: "La estrella central de nuestro sistema solar, fuente de luz y energía.",
        description:
            "El Sol es una estrella de tipo G2V que contiene el 99.86% de la masa del sistema solar. Su temperatura superficial es de unos 5500 °C, mientras que el núcleo alcanza 15 millones de grados, donde el hidrógeno se fusiona en helio. Su intenso campo magnético genera manchas solares, erupciones y viento solar que afecta a todos los planetas.",
        image: "Imagenes/Sol.jpg",
        facts: [
            "Un segundo de energía solar bastaría para abastecer a la humanidad durante 500.000 años.",
            "Su masa equivale a 333.000 veces la de la Tierra.",
            "La luz del Sol tarda unos 8 minutos y 20 segundos en llegar a nosotros.",
            "Cada 11 años invierte su campo magnético, provocando picos de actividad solar."
        ],
        gallery: [
            { src: "Imagenes/Sol.jpg", caption: "El Sol en luz visible, con manchas solares." },
            { src: "Imagenes/sistemasolar.png", caption: "El Sol domina el sistema solar." },
            { src: "Imagenes/EclipseTotal.jpg", caption: "Eclipse total: la Luna oculta al Sol." },
            { src: "Imagenes/sol_actividad.jpg", caption: "Erupción solar captada en ultravioleta." }
        ]
    },
    mercurio: {
        name: "Mercurio",
        hero: "El planeta más pequeño y cercano al Sol, con extremos térmicos brutales.",
        description:
            "Mercurio es un mundo rocoso lleno de cráteres, similar a nuestra Luna. Su cercanía al Sol provoca variaciones de temperatura de más de 600 °C entre el día y la noche. Carece de atmósfera significativa, por lo que el cielo siempre es negro. Tiene un enorme núcleo de hierro que genera un campo magnético débil pero sorprendente para su tamaño.",
        image: "Imagenes/Mercurio.jpg",
        facts: [
            "Un día en Mercurio (desde el amanecer hasta el siguiente) dura 176 días terrestres.",
            "Su núcleo ocupa el 85% del radio del planeta, algo único en el sistema solar.",
            "Las temperaturas diurnas superan los 430 °C y nocturnas bajan a -180 °C.",
            "La sonda MESSENGER descubrió hielo de agua en cráteres permanentemente sombreados."
        ],
        gallery: [
            { src: "Imagenes/Mercurio.jpg", caption: "Superficie craterizada de Mercurio." },
            { src: "Imagenes/sistemasolar.png", caption: "Mercurio, el más interno." },
            { src: "Imagenes/messenger.jpg", caption: "Sonda MESSENGER en órbita (artística)." },
            { src: "Imagenes/mercurio_caloris.jpg", caption: "Cuenca Caloris, una gran cuenca de impacto." }
        ]
    },
    venus: {
        name: "Venus",
        hero: "El planeta gemelo infernal: mismo tamaño que la Tierra, pero con efecto invernadero desbocado.",
        description:
            "Venus está envuelto en nubes de ácido sulfúrico que reflejan la luz solar, haciéndolo el objeto más brillante del cielo tras el Sol y la Luna. Su atmósfera, compuesta en un 96% de dióxido de carbono, genera una presión 92 veces superior a la terrestre y temperaturas de hasta 470 °C, suficientes para fundir plomo. Cuenta con volcanes y montañas, pero ningún agua líquida.",
        image: "Imagenes/venus.jpg",
        facts: [
            "Gira al revés que los demás planetas (rotación retrógrada) y muy lentamente: un día dura más que su año.",
            "Su presión atmosférica equivale a estar a 900 metros bajo el mar en la Tierra.",
            "Las sondas soviéticas Venera lograron sobrevivir solo unas horas en su superficie.",
            "Se cree que Venus tuvo océanos hace miles de millones de años, pero el calor los evaporó."
        ],
        gallery: [
            { src: "Imagenes/venus.jpg", caption: "Venus visto en luz ultravioleta, mostrando nubes." },
            { src: "Imagenes/sistemasolar.png", caption: "Venus, segundo planeta desde el Sol." },
            { src: "Imagenes/venera.jpg", caption: "Superficie de Venus fotografiada por Venera 13." },
            { src: "Imagenes/venus_volcan.jpg", caption: "Volcán Maat Mons, uno de los más altos." }
        ]
    },
    tierra: {
        name: "Tierra",
        hero: "Nuestro hogar azul, el único planeta conocido con vida.",
        description:
            "La Tierra es el tercer planeta desde el Sol y el mayor de los rocosos. Posee una atmósfera rica en nitrógeno y oxígeno, agua líquida en superficie y una tectónica de placas activa. Alberga millones de especies, desde microorganismos hasta ballenas. Su campo magnético la protege del viento solar, y la Luna estabiliza su inclinación axial, permitiendo estaciones moderadas.",
        image: "Imagenes/Tierra.png",
        facts: [
            "El 71% de su superficie está cubierta por océanos, pero solo el 3% del agua es dulce.",
            "La atmósfera terrestre se extiende más allá de la Luna (exosfera).",
            "El núcleo interno de hierro sólido gira más rápido que el resto del planeta.",
            "Cada año, la Tierra recibe 40.000 toneladas de polvo cósmico."
        ],
        gallery: [
            { src: "Imagenes/Tierra.png", caption: "La Tierra vista desde el Apolo 17 (Canica Azul)." },
            { src: "Imagenes/Luna.jpg", caption: "La Luna, su compañera inseparable." },
            { src: "Imagenes/sistemasolar.png", caption: "La Tierra en su contexto." },
            { src: "Imagenes/atmósfera.jpg", caption: "Auroras boreales, efecto del campo magnético." }
        ]
    },
    luna: {
        name: "Luna",
        hero: "El satélite natural que esculpe nuestras noches y mareas.",
        description:
            "La Luna es el quinto satélite más grande del sistema solar. Se formó hace unos 4500 millones de años, probablemente tras el impacto de un cuerpo del tamaño de Marte contra la Tierra primitiva. Su superficie está cubierta de cráteres, mares de basalto y montañas. Carece de atmósfera, por lo que las huellas de los astronautas del Apolo permanecerán intactas durante millones de años.",
        image: "Imagenes/Luna.jpg",
        facts: [
            "Siempre vemos la misma cara porque rota sincronizada con su órbita alrededor de la Tierra.",
            "La fuerza gravitacional de la Luna causa las mareas y alarga nuestros días 1,8 milisegundos cada siglo.",
            "Las temperaturas varían desde 120 °C de día hasta -170 °C de noche.",
            "Solo 12 personas han caminado sobre su superficie, todas en misiones Apolo."
        ],
        gallery: [
            { src: "Imagenes/Luna.jpg", caption: "Cara visible de la Luna llena." },
            { src: "Imagenes/apolo.jpg", caption: "Huella de un astronauta del Apolo 11." },
            { src: "Imagenes/luna_superficie.jpg", caption: "Cráter Tycho y sus rayos brillantes." },
            { src: "Imagenes/tierra_luna.jpg", caption: "Tierra y Luna vistos desde el espacio." }
        ]
    },
    marte: {
        name: "Marte",
        hero: "El planeta rojo, objetivo de la exploración interplanetaria.",
        description:
            "Marte es el cuarto planeta y el más parecido a la Tierra en algunos aspectos: tiene estaciones, casquetes polares, volcanes gigantes y cañones profundos. Su color rojizo proviene del óxido de hierro (herrumbre) en el suelo. Su atmósfera es muy tenue (95% CO₂) y fría (-60 °C de media). El Monte Olimpo, un volcán extinto, es la montaña más alta del sistema solar, con 21 km de altura.",
        image: "Imagenes/Marte.jpg",
        facts: [
            "El Valle Marineris es un sistema de cañones tan largo como los Estados Unidos.",
            "Un año marciano dura 687 días terrestres, pero un día solo 24h 37min.",
            "Los casquetes polares contienen hielo de agua y dióxido de carbono congelado.",
            "Actualmente hay 5 misiones activas en Marte (rovers y orbitadores)."
        ],
        gallery: [
            { src: "Imagenes/Marte.jpg", caption: "Superficie de Marte desde el rover Curiosity." },
            { src: "Imagenes/sistemasolar.png", caption: "Marte, el cuarto planeta." },
            { src: "Imagenes/olimpo.jpg", caption: "Monte Olimpo, volcán más alto del sistema solar." },
            { src: "Imagenes/marte_polar.jpg", caption: "Casquete polar sur marciano." }
        ]
    },
    jupiter: {
        name: "Júpiter",
        hero: "El gigante gaseoso con la icónica Gran Mancha Roja.",
        description:
            "Júpiter es el planeta más masivo (2.5 veces la suma de todos los demás) y tiene el día más corto: apenas 9.9 horas. Su atmósfera, rica en hidrógeno y helio, muestra bandas de nubes impulsadas por vientos de hasta 600 km/h. La Gran Mancha Roja es una tormenta anticiclónica mayor que la Tierra que ha durado siglos. Posee al menos 95 lunas, entre ellas Ío, Europa, Ganímedes y Calisto.",
        image: "Imagenes/Jupiter.png",
        facts: [
            "Júpiter emite más energía de la que recibe del Sol, debido a su contracción gravitacional.",
            "Su campo magnético es 20.000 veces más fuerte que el terrestre.",
            "Europa, una de sus lunas, tiene un océano subterráneo candidato para albergar vida.",
            "La sonda Juno lleva orbitándolo desde 2016, estudiando su interior."
        ],
        gallery: [
            { src: "Imagenes/Jupiter.png", caption: "Júpiter con la Gran Mancha Roja." },
            { src: "Imagenes/sistemasolar.png", caption: "Júpiter en el sistema solar." },
            { src: "Imagenes/europa.jpg", caption: "Europa, luna helada con posible océano." },
            { src: "Imagenes/juno.jpg", caption: "Vista de Júpiter desde la sonda Juno." }
        ]
    },
    saturno: {
        name: "Saturno",
        hero: "El planeta de los anillos más espectaculares del sistema solar.",
        description:
            "Saturno es el sexto planeta y el segundo más grande. Sus famosos anillos están compuestos por miles de millones de partículas de hielo y roca, desde micras hasta metros. Tiene una densidad media menor que el agua: ¡flotaría en un océano teórico! Su atmósfera presenta vientos supersónicos y una extraña tormenta hexagonal en el polo norte. Posee más de 80 lunas, destacando Titán, la única con atmósfera densa, y Encélado, con géiseres de agua.",
        image: "Imagenes/Saturno.png",
        facts: [
            "Los anillos son muy delgados: en promedio solo 10 metros de espesor.",
            "Un día en Saturno dura 10 horas y 33 minutos, aunque su rotación es difícil de medir.",
            "La nave Cassini pasó 13 años orbitándolo y finalmente se sumergió en su atmósfera.",
            "El polo norte de Saturno tiene una corriente en chorro con forma de hexágono perfecto."
        ],
        gallery: [
            { src: "Imagenes/Saturno.png", caption: "Saturno y sus anillos desde Cassini." },
            { src: "Imagenes/sistemasolar.png", caption: "Saturno, sexto planeta." },
            { src: "Imagenes/Titan.jpg", caption: "Titán, la luna gigante con lagos de metano." },
            { src: "Imagenes/encelado.jpg", caption: "Encélado expulsando agua al espacio." }
        ]
    },
    titan: {
        name: "Titán",
        hero: "La luna de Saturno con atmósfera densa y ríos de metano.",
        description:
            "Titán es la segunda luna más grande del sistema solar (solo superada por Ganímedes) y la única con una atmósfera espesa y rica en nitrógeno, similar a la Tierra primitiva. Su superficie alberga lagos, ríos y mares de metano y etano líquidos, bajo una niebla anaranjada. La sonda Huygens aterrizó allí en 2005, revelando un mundo frío (-179 °C) pero geológicamente activo, con dunas de hidrocarburos y posibles criovolcanes.",
        image: "Imagenes/Titan.jpg",
        facts: [
            "La presión atmosférica en Titán es un 50% mayor que la terrestre.",
            "Podrías volar con alas sujetas a tus brazos debido a la baja gravedad y atmósfera densa.",
            "Se cree que existe un océano de agua líquida bajo su corteza helada.",
            "El ciclo del metano en Titán funciona igual que el ciclo del agua en la Tierra."
        ],
        gallery: [
            { src: "Imagenes/Titan.jpg", caption: "Titán visto por la misión Cassini." },
            { src: "Imagenes/titan_huygens.jpg", caption: "Superficie de Titán desde Huygens." },
            { src: "Imagenes/titan_lagos.jpg", caption: "Imagen de radar de los lagos de metano." },
            { src: "Imagenes/sistemasolar.png", caption: "Titán comparado con la Tierra y la Luna." }
        ]
    },
    urano: {
        name: "Urano",
        hero: "El gigante de hielo que gira de lado.",
        description:
            "Urano es el séptimo planeta, descubierto en 1781. Su característica más extraña es una inclinación axial de 98°, lo que hace que sus polos apunten casi directamente al Sol. Esto provoca estaciones extremas de 42 años cada una. Su atmósfera de hidrógeno, helio y metano le otorga un tono azul verdoso. Es un gigante de hielo con un manto de agua, amoníaco y metano, y posee tenues anillos y 27 lunas conocidas.",
        image: "Imagenes/Urano.jpg",
        facts: [
            "Es el único planeta cuyo nombre proviene de la mitología griega (Urano, dios del cielo), no de la romana.",
            "Gira retrógrado como Venus, pero además 'acostado' sobre su órbita.",
            "Vientos en su atmósfera alcanzan los 900 km/h, a pesar de estar muy lejano.",
            "La Voyager 2 es la única nave que lo ha visitado, en 1986."
        ],
        gallery: [
            { src: "Imagenes/Urano.jpg", caption: "Urano visto por la Voyager 2." },
            { src: "Imagenes/sistemasolar.png", caption: "Urano, séptimo planeta." },
            { src: "Imagenes/uranus_rings.jpg", caption: "Anillos de Urano." },
            { src: "Imagenes/urano_lunas.jpg", caption: "Las cinco lunas principales." }
        ]
    },
    neptuno: {
        name: "Neptuno",
        hero: "El gigante azul donde soplan los vientos más rápidos.",
        description:
            "Neptuno es el octavo planeta, descubierto por cálculos matemáticos antes de ser observado. Su color azul intenso se debe al metano atmosférico. Presenta la Gran Mancha Oscura (una tormenta similar a la de Júpiter) y vientos de hasta 2.100 km/h, los más veloces del sistema solar. Emite más calor del que recibe del Sol. Tiene 14 lunas, destacando Tritón, que orbita en dirección contraria a la rotación del planeta.",
        image: "Imagenes/Neptuno.jpg",
        facts: [
            "Neptuno fue el primer planeta descubierto mediante predicciones matemáticas (1846).",
            "Su Gran Mancha Oscura desaparece y reaparece, a diferencia de la de Júpiter.",
            "Tritón es una luna geológicamente activa con géiseres de nitrógeno.",
            "Una órbita alrededor del Sol tarda 165 años terrestres; desde su descubrimiento no ha completado ni una."
        ],
        gallery: [
            { src: "Imagenes/Neptuno.jpg", caption: "Neptuno visto por la Voyager 2." },
            { src: "Imagenes/sistemasolar.png", caption: "Neptuno, el más exterior." },
            { src: "Imagenes/triton.jpg", caption: "Tritón, la luna cautiva de Neptuno." },
            { src: "Imagenes/neptuno_mancha.jpg", caption: "La Gran Mancha Oscura y nubes brillantes." }
        ]
    }
};

// Funciones auxiliares (sin cambios, solo se asegura que existan)
const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) node.textContent = value;
};

const setImage = (selector, value, altText) => {
    const node = document.querySelector(selector);
    if (node && value) {
        node.src = value;
        if (altText) node.alt = altText;
    }
};

const applyFacts = (facts) => {
    if (!facts || facts.length === 0) return;
    const cards = document.querySelectorAll(".fact-card");
    cards.forEach((card, index) => {
        const text = facts[index];
        if (!text) return;
        const paragraph = card.querySelector("p");
        if (paragraph) paragraph.textContent = text;
    });
};

const applyGallery = (gallery) => {
    if (!gallery || gallery.length === 0) return;
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
        const entry = gallery[index];
        if (!entry) return;
        const image = item.querySelector("img");
        const caption = item.querySelector("figcaption");
        if (image) {
            image.src = entry.src;
            image.alt = entry.caption || "Galería";
        }
        if (caption && entry.caption) caption.textContent = entry.caption;
    });
};

const loadBodyContent = () => {
    const params = new URLSearchParams(window.location.search);
    const key = (params.get("body") || "").toLowerCase();
    const data = bodies[key];

    if (!data) return;

    setText("#heroTitle", data.name);
    setText("#heroDescription", data.hero);
    setText("#bodyDescription", data.description);
    setImage("#heroImage", data.image, `Imagen de ${data.name}`);
    document.title = `Contenido de ${data.name}`;

    applyFacts(data.facts);
    applyGallery(data.gallery);
};

window.addEventListener("DOMContentLoaded", loadBodyContent);