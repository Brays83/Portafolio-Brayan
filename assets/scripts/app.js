
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
              
        
            items_nav.forEach(item => {
                item.classList.remove('activo', 'dark-activo');
            });

            let index = -1;

            if(entidad.target.classList[0] === 'elementos-carrusel'){
                index = 0;
            } else if(entidad.target.classList[0] === 'info-nombre'){
                index = 1;
            } else if(entidad.target.classList[0] === 'titulo-proyectos'){
                index = 2;
            }

            if(index >= 0){
                items_nav[index].classList.add('activo');

                if (localStorage.getItem('dark-mode') === 'true') {
                    items_nav[index].classList.add('dark-activo');
                }
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
const header = document.querySelector('.header');

//Logica para el icono del modo oscuro
const icono_sun = document.querySelector('.icon-sun');

if(localStorage.getItem('dark-mode') === 'true'){
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
    card.forEach(c => c.classList.add('dark-mode-card'));
    puntos.forEach(p => p.classList.add('dark-mode-punto'));

    icono_sun.classList.add('ti-sun-filled')

    header.classList.add('dark-mode-header');
    toggleSwitch.checked = true;
}




toggleSwitch.addEventListener('change', () => {
    if(toggleSwitch.checked){
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');
        header.classList.add('dark-mode-header');
        icono_sun.classList.add('ti-sun-filled')
   
        card.forEach(c => c.classList.add('dark-mode-card'));
        puntos.forEach(p => p.classList.add('dark-mode-punto'));

        localStorage.setItem('dark-mode', 'true');
    }
    else{
        body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
        card.forEach(c => c.classList.remove('dark-mode-card'));
        puntos.forEach(p => p.classList.remove('dark-mode-punto'));
        header.classList.remove('dark-mode-header');
        icono_sun.classList.remove('ti-sun-filled')
        
        header.classList.remove('dark-mode-header');
        

        localStorage.setItem('dark-mode', 'false');	
    }
})


document.getElementById("btn-descargar").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/images/BrayanSmith_Curriculum.pdf"; // Ruta del archivo PDF
    link.download = "BrayanSmith_Curriculum.pdf"; // Nombre del archivo al descargar

    link.click();

});







