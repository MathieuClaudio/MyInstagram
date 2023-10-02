"use strict";

// ##################
// ### constantes ###

// ### clicking aquí están los demás iconos o botones que aún no tienen funcionalidad ###
// Aciones para la barra del header
const iconComment = document.querySelector("#iconComment");
iconComment.addEventListener("click", () => {
    alert("Agregar comentario...");
});
const iconFavorite = document.querySelector("#iconFavorite");
iconFavorite.addEventListener("click", () => {
    alert("Marcar como favorito");
});

// Acciones de la barra del footer
const iconSearch = document.querySelector('#iconSearch');
iconSearch.addEventListener("click", () => {
    alert("Buscando...");
});
const iconVideo = document.querySelector('#iconVideo');
iconVideo.addEventListener("click", () => {
    alert("Nuevo video...");
});
const iconUser = document.querySelector('#iconUser');
iconUser.addEventListener("click", () => {
    alert("Mi perfil...");
});