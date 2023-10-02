"use strict";

// ##################
// ### constantes ###

// URL api
const URLApi = "https://6510958d3ce5d181df5d6267.mockapi.io/api/v1/posts";

// para los posts
const arrayPost = [];

// para cuando no hay post
const postEmpty = [
    {
        "id": "0",
        "title": "Aún no has cargado ningún post",
        "imagen": "https://via.placeholder.com/400x600",
        "countFavorite": 0,
        "countComment": 0,
        "date": ""
    }
]

// Para manipular la sección de los article posts
const sectionPosts = document.querySelector("#posts");
// Opciones para el formato de fecha en español
const opciones = {
    year: 'numeric',
    month: 'long', // muestro el nombre completo del mes
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long', // muestro el nombre completo del día
};
// Crear el formateador de fecha en español
const formateador = new Intl.DateTimeFormat('es-ES', opciones);


// ###############
// ### Metodos ###

// Método para obtener todos los posts desde Mockapi.com
function getPosts() {
    fetch(URLApi)
        // Obtengo los datos
        .then((response) => response.json())
        // Agrego los datos obtenidos a arrayPost
        .then((datos) => {
            arrayPost.push(...datos);
            // Ordeno arrayPost en orden descendente
            arrayPost.sort((a, b) => b.date - a.date);
        }) //SPREAD OPERATOR
        .then(() => {
            let divPost;
            if (arrayPost.length == 0) {
                for (const post in postEmpty) {
                    if (postEmpty.hasOwnProperty(post)) {
                        const element = postEmpty[post];
                        divPost = document.createElement("article");
                        divPost.classList.add("post");
                        divPost.innerHTML = `
                        <p>${element.title}</p>
                        <img src="${element.imagen}" alt="Imagen ${post.length}">
                        <p>Utiliza el botón <span class="material-symbols-outlined" id="iconAdd">add_circle</span> para agregar tu primer post</p>
                    `;
                        sectionPosts.appendChild(divPost);
                    }
                }
            } else {
                for (const post in arrayPost) {
                    if (arrayPost.hasOwnProperty(post)) {
                        const element = arrayPost[post];
                        divPost = document.createElement("article");
                        divPost.classList.add("post");

                        // Trabajando con la fecha
                        const fecha = new Date(element.date * 1000); // Multiplicamos por 1000 para convertir segundos en milisegundos
                        const fechaFormateada = formateador.format(fecha);

                        divPost.innerHTML = `
                        <p>${element.title}</p>
                        <img src="${element.imagen}" alt="Imagen ${post.length}" width="400">
                        <br>
                        <span class="material-symbols-outlined">favorite</span><span class="likes"> Le gusta a ${element.countFavorite} personas</span>
                        <p><span class="material-symbols-outlined">mark_unread_chat_alt</span><span class="comments">${element.countComment} comentarios...</span></p>
                        <p><span class="material-symbols-outlined">calendar_month</span><span class="datetime">${fechaFormateada}</span></p>
                        <button type="button" id="${element.id}" class="btn btn-danger bt-sm borrar">Borrar</button>
                        <button type="button" id="${element.id}" class="btn btn-info bt-sm editar">Editar</button>
                        <hr>
                    `;
                        sectionPosts.appendChild(divPost);
                    }
                }
            }
        })
        //.then(()=> console.table(arrayPost))
        .catch((error) => console.error("Se ha producido un error:", error))

}


// Función para obtener la ruta de la imagen según el entorno
function obtenerRutaImagen() {
    // Verificar si estamos en localhost
    // agenda.local es un dominio que tengo configurado localmente como https para pruebas por eso está en este listado
    if (window.location.hostname === "agenda.local" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return "/myinstagram/img/logo.png";
    } else {
        return "https://raw.githubusercontent.com/MathieuClaudio/MyInstagram/main/img/logo.png"; 
    }
}


// #########################################################################################
// ### Entry Point ###

getPosts();
