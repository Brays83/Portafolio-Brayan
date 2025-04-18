const elementos_carrusel = document.querySelector('.elementos-carrusel');
const puntos = document.querySelectorAll('.punto');

puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {  // Se quita `punto[i]`
        let position = i;
        let operation = position * -50;

        elementos_carrusel.style.transform = `translateX(${operation}%)`;

        
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

array_animacion_header.forEach(seccion => {
    
    observador_header.observe(seccion);
})

/*Modo Oscuro*/

const toggleSwitch = document.getElementById('switch-dark-mode');
const body = document.body;
const main = document.querySelector('.main');

if(localStorage.getItem('dark-mode') === 'true'){
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    if(toggleSwitch.checked){
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
    }
    else{
        body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');	
    }
})








