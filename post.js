"use strict";

// ### constantes ###

// URL api
const URL = "https://6510958d3ce5d181df5d6267.mockapi.io/api/v1/posts";
// para los posts
const arrayPost = [];
// para cuando no hay post
const postEmpty = [
    {
        "id": "0",
        "title": "Aún no has cargado ningún post",
        "imagen": "http://via.placeholder.com/400x600",
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






// ### Variables globales ###







// ### clicking ###
// Aciones para la barra del header
const iconComment = document.querySelector("#iconComment");
iconComment.addEventListener("click", () => {
    alert("Agregar comentario...");
});
const iconFavorite = document.querySelector("#iconFavorite");
iconFavorite.addEventListener("click", () => {
    alert("Marcar como favorito");
});

// Acciones de la barra deel footer
const iconSearch = document.querySelector('#iconSearch');
iconSearch.addEventListener("click", () => {
    alert("Buscando...");
});
const iconHome = document.querySelector('#iconHome');
iconHome.addEventListener("click", () => {
    window.location.reload();
});
const addPost = document.querySelector('#iconAdd');
addPost.addEventListener("click", () => {
    console.log("haciendo click");
    alert("Nuevo post...");
});
const iconVideo = document.querySelector('#iconVideo');
iconVideo.addEventListener("click", () => {
    alert("Nuevo video...");
});
const iconUser = document.querySelector('#iconUser');
iconUser.addEventListener("click", () => {
    alert("Mi perfil...");
});






// ### Metodos ###

// Método para obtener todos los posts
function getPosts() {
    fetch(URL)
        // Obtengo los datos
        .then((response) => response.json())
        // Agrego los datos obtenidos a arrayPost
        .then((datos) => arrayPost.push(...datos)) //SPREAD OPERATOR
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
                        <img src="${element.imagen}" alt="Imagen ${post.length}">
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
    if (window.location.hostname === "agenda.local" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return "/myinstagram/img/logo.png";
    } else {
        return "https://ruta-del-dominio-real.com/myinstagram/img/logo.png"; 
    }
}

// Función para mostrar una notificación
function mostrarNotificacion(title , notify) {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                var body = notify;
                var icon = "/myinstagram/img/logo.png"; // https://raw.githubusercontent.com/MathieuClaudio/MyInstagram/main/img/logo.png
                var title = title;
                var options = {
                    body: body,
                    icon: obtenerRutaImagen(),
                    lang: "ES"
                }
                const notification = new Notification(title, options);
            }
        });
    } else {
        alert('Las notificaciones no son compatibles en este navegador.');
    }
}




// #########################################################################################


// ### Entry Point ###
// arrayPost = [
//     {
//      "id": "1",
//      "title": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque ad aut.",
//      "imagen": "https://picsum.photos/400/600",
//      "countFavorite": 4000,
//      "countComment": 154,
//      "date": 1695586079
//     },
//     {
//      "id": "2",
//      "title": "Título 2",
//      "imagen": "https://loremflickr.com/400/600",
//      "countFavorite": 150,
//      "countComment": 5,
//      "date": 1700512500
//     }
// ]






getPosts();

window.addEventListener("load", function(){
    mostrarNotificacion("Notificación", "Ejemplo de notificación push con JS");
})
