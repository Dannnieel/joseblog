const menuContainer = document.getElementById('menucon');
// Crea un nuevo menú en JavaScript
const newMenu = document.createElement('ul');
newMenu.classList.add('.menu'); // Agrega una clase al menú

// Crea elementos de lista con clases
const listItem1 = document.createElement('li');
listItem1.textContent = 'aboutme';
listItem1.classList.add('.aboutmee'); // Agrega una clase al primer elemento de lista

const listItem2 = document.createElement('li');
listItem2.textContent = 'contact';
listItem2.classList.add('.contactme'); // Agrega una clase al segundo elemento de lista

const listItem3 = document.createElement('li');
listItem3.textContent = 'Section1';
listItem3.classList.add('.section-1'); // Agrega una clase al tercer elemento de lista

const listItem4 = document.createElement('li');
listItem4.textContent = 'Section2';
listItem4.classList.add('.section-2'); // Agrega una clase al tercer elemento de lista

// Agrega los elementos de lista al menú
newMenu.appendChild(listItem1);
newMenu.appendChild(listItem2);
newMenu.appendChild(listItem3);
newMenu.appendChild(listItem4);

// Reemplaza el contenido del contenedor del menú con el nuevo menú
menuContainer.innerHTML = '';
menuContainer.appendChild(newMenu);


document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}


// const aboutmee = document.querySelector('.aboutmee');
listItem1.addEventListener("click", () => {
    makeActive(listItem1)   
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

// const inContactme = document.querySelector('.contactme');
 listItem2.addEventListener("click", () => {
     makeActive(listItem2)
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


// const iconAbout = document.querySelector('.section-1');
 listItem3.addEventListener("click", function () {
     makeActive(listItem3)
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

// const iconSection2 = document.querySelector('.section-2');
 listItem4.addEventListener("click", () => {
     makeActive(listItem4)
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

 function makeActive(element) {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

}