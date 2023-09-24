"use strict";

// ### constantes ###
// Para manipular la sección de los article posts
const sectionPosts = document.querySelector("#posts");
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


// ### Variables globales ###
// para los posts
let arrayPost = [];






// ### clicking ###
// Aciones para la barra del header
const iconComment = document.querySelector("#iconComment");
iconComment.addEventListener("click", ()=> {
    alert("Agregar comentario...");
});
const iconFavorite = document.querySelector("#iconFavorite");
iconFavorite.addEventListener("click", ()=> {
    alert("Marcar como favorito");
});

// Acciones de la barra deel footer
const iconSearch = document.querySelector('#iconSearch');
iconSearch.addEventListener("click", ()=> {
    alert("Buscando...");
});
const iconHome = document.querySelector('#iconHome');
iconHome.addEventListener("click", ()=> {
    window.location.reload();
});
const addPost = document.querySelector('#iconAdd');
addPost.addEventListener("click", ()=> {
    console.log("haciendo click");
    alert("Nuevo post...");
});
const iconVideo = document.querySelector('#iconVideo');
iconVideo.addEventListener("click", ()=> {
    alert("Nuevo video...");
});
const iconUser = document.querySelector('#iconUser');
iconUser.addEventListener("click", ()=> {
    alert("Mi perfil...");
});





// ### Metodos ###
function getPosts(){
    let divPost;
    if(arrayPost.length == 0){
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
    }else{
        for (const post in arrayPost) {
            if (arrayPost.hasOwnProperty(post)) {
                const element = arrayPost[post];
                divPost = document.createElement("article");
                divPost.classList.add("post");
                divPost.innerHTML = `
                    <p>${element.title}</p>
                    <img src="${element.imagen}" alt="Imagen ${post.length}">
                    <span class="material-symbols-outlined">favorite</span><span class="likes"> Le gusta a ${element.countFavorite} personas</span>
                    <p><span class="material-symbols-outlined">mark_unread_chat_alt</span><span class="comments">${element.countComment} comentarios...</span></p>
                    <p><span class="material-symbols-outlined">calendar_month</span><span class="datetime">${element.date}</span></p>
                    <button type="button" id="${element.id}" class="btn btn-danger bt-sm borrar">Borrar</button>
                    <button type="button" id="${element.id}" class="btn btn-info bt-sm editar">Editar</button>
                    <hr>
                `;
                sectionPosts.appendChild(divPost);
            }
        } 
    }
}



// ### Entry Point ###
// arrayPost = [
//     {
//      "id": "1",
//      "title": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque ad aut.",
//      "imagen": "https://picsum.photos/400/600",
//      "countFavorite": 4000,
//      "countComment": 154,
//      "date": "22/09/2023"
//     },
//     {
//      "id": "2",
//      "title": "Título 2",
//      "imagen": "https://loremflickr.com/400/600",
//      "countFavorite": 150,
//      "countComment": 5,
//      "date": "20/09/2023"
//     }
// ]
getPosts();