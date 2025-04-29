
const elementos_carrusel = document.querySelector('.elementos-carrusel');
const puntos = document.querySelectorAll('.punto');

const toggleSwitch = document.getElementById('switch-dark-mode');
const body = document.body;
const main = document.querySelector('.main');

const totalSlides = puntos.length;

//Logica puntos de carrus

let currentIndex = 0;

function moverCarrusel() {
    puntos.forEach(p => {
        p.classList.remove('activo-punto', 'activo-punto-dark');
    });

    puntos[currentIndex].classList.add('activo-punto');
    if (body.classList.contains('dark-mode')) {
        puntos[currentIndex].classList.add('activo-punto-dark');
    }

    let operation = currentIndex * -25;
    elementos_carrusel.style.transform = `translateX(${operation}%)`;

    currentIndex = (currentIndex + 1) % puntos.length; // Avanza y reinicia al llegar al final
}


setInterval(moverCarrusel, 3000);


puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        currentIndex = i; 
        moverCarrusel();  
    });
});



/*Logica para iluminacion del header seccion */

const items_nav = document.querySelectorAll('.inicio a');
const secciones = document.querySelectorAll('section');

const carrusel = document.querySelector('.elementos-carrusel');
const titulo_sobremi = document.querySelector('.info-nombre');
const titulo_proyectos = document.querySelector('.titulo-proyectos');

const array_animacion_header = [carrusel, titulo_sobremi, titulo_proyectos];


//Logica para el navbar
function activeBtnNavBar(elemento){

    const items_nav = document.querySelectorAll('.navbar a');
    
    items_nav.forEach((item) => {
        item.classList.remove('activo');
    })

    elemento.classList.add('activo');
    
}




//Logica para el header
const observador_header = new IntersectionObserver((entidades) => {
    entidades.forEach(entidad => {
        if(entidad.isIntersecting){

            console.log(entidad.target.classList[0]);
            if(entidad.target.classList[0] === 'elementos-carrusel'){
                items_nav[1].classList.remove('activo');
                items_nav[2].classList.remove('activo');
                items_nav[0].classList.add('activo');  
            } else if(entidad.target.classList[0] === 'info-nombre'){
                items_nav[0].classList.remove('activo');
                items_nav[2].classList.remove('activo');
                items_nav[1].classList.add('activo');
                
            } else if(entidad.target.classList[0] === 'titulo-proyectos'){
                items_nav[0].classList.remove('activo');
                items_nav[1].classList.remove('activo');
                items_nav[2].classList.add('activo');
                
            }
            
            
            

        }
    })
},{})

//Creacion de un Observador para ver en que seccion estamos
array_animacion_header.forEach(seccion => {
    
    observador_header.observe(seccion);
})

/*Modo Oscuro*/

const card = document.querySelectorAll('.card');

if(localStorage.getItem('dark-mode') === 'true'){
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
    card.forEach(c => c.classList.add('dark-mode-card'));
    puntos.forEach(p => p.classList.add('dark-mode-punto'));
    toggleSwitch.checked = true;
}



toggleSwitch.addEventListener('change', () => {
    if(toggleSwitch.checked){
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');

        card.forEach(c => c.classList.add('dark-mode-card'));
        puntos.forEach(p => p.classList.add('dark-mode-punto'));

        localStorage.setItem('dark-mode', 'true');
    }
    else{
        body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
        card.forEach(c => c.classList.remove('dark-mode-card'));
        puntos.forEach(p => p.classList.remove('dark-mode-punto'));
        localStorage.setItem('dark-mode', 'false');	
    }
})


document.getElementById("btn-descargar").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/images/BrayanSmith_Curriculum.pdf"; // Ruta del archivo PDF
    link.download = "BrayanSmith_Curriculum.pdf"; // Nombre del archivo al descargar

    link.click();

});





