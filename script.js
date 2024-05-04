// Guardo la URL de la API le puse limite de 15 elementos para traer
//puedo modificarlo segun el numero maximo permitido

const url = 'https://api.nasa.gov/planetary/apod?api_key=COLOCA AQUI TU APIKEY_SOLICITADA';



//async y await --- try{} y catch{}

async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json(); 
        
        const card = document.querySelector('[data-ul]'); //es un data atribute como el de contexto en Fokus

        datosImagenes.forEach(imagen => {
            const contenido = `<li class="card">
            <img class="card__image" src="${imagen.url}" alt="${imagen.title}">
            <h3 class="card__title">${imagen.title}</h3>
        </li>`

        card.innerHTML = card.innerHTML + contenido;                
        });               
    }
    catch(error){
        console.log(error)
    }
}
    listaImagenes();



//then y catch 

/*
function listaImagenes(){
    fetch(url)  //solo va la URL porque es un GET 
    .then(response => response.json())

    .then(datosImagenes =>{
        console.log(datosImagenes);            
        const card = document.querySelector('[data-ul]'); //es un data atribute como el de contexto en Fokus

        datosImagenes.forEach(imagen => {
            const contenido = `<li class="card">
            <img class="card__image" src="${imagen.url}" alt="${imagen.title}">
            <h3 class="card__title">${imagen.title}</h3>
        </li>`

        card.innerHTML = card.innerHTML + contenido;                
    });


})
    .catch(error => console.log(error))
    
listaImagenes();
*/
