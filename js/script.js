document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

const iconAbout = document.querySelector('.section-1');
iconAbout.addEventListener("click", function () {
    console.log("Entro al evento");
    const section1 = document.querySelector('#section1');
    const section1Rect = section1.getBoundingClientRect();
    console.log("Posición de la Sección 1:");
    console.log("Top:", section1Rect.top);
    console.log("Right:", section1Rect.right);
    console.log("Bottom:", section1Rect.bottom);
    console.log("Left:", section1Rect.left);

    section1.scrollIntoView({ behavior: 'smooth' });
});

const iconSection2 = document.querySelector('.section-2');
iconSection2.addEventListener("click", () => {
    console.log("Entro al evento");
    const section2 = document.querySelector('#section2');
    const section2Rect = section2.getBoundingClientRect();
    console.log("Posición de la Sección 2:");
    console.log("Top:", section2Rect.top);
    console.log("Right:", section2Rect.right);
    console.log("Bottom:", section2Rect.bottom);
    console.log("Left:", section2Rect.left);

    section2.scrollIntoView({ behavior: 'smooth' });
});

const aboutmee = document.querySelector('.aboutmee');
aboutmee.addEventListener("click", () => {
    console.log("Entro al evento");
    const abotume = document.querySelector('#about');
    const abotmeRect = abotume.getBoundingClientRect();
    console.log("Posición de la Sección 2:");
    console.log("Top:", abotmeRect.top);
    console.log("Right:", abotmeRect.right);
    console.log("Bottom:", abotmeRect.bottom);
    console.log("Left:", abotmeRect.left);

    abotume.scrollIntoView({ behavior: 'smooth' });
});

const inContactme = document.querySelector('.contactme');
inContactme.addEventListener("click", () => {
    console.log("Entro al evento");
    const contactme = document.querySelector('#contact');
    const contactRect = contactme.getBoundingClientRect();
    console.log("Posición de la Sección 2:");
    console.log("Top:", contactRect.top);
    console.log("Right:", contactRect.right);
    console.log("Bottom:", contactRect.bottom);
    console.log("Left:", contactRect.left);

    contactme.scrollIntoView({ behavior: 'smooth' });
});