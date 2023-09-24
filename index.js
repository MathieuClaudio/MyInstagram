"use strict";

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