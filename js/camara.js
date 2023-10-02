"use strict";

// ##################
// ### constantes ###

// URL api
const URLApi = "https://6510958d3ce5d181df5d6267.mockapi.io/api/v1/posts";
const btnPublicar= document.querySelector('#btnPublicar');
const buttoncamara = document.querySelector("button#camara");
const divNotificaciones = document.querySelector("div#notificaciones");
const camara = document.createElement("input");
const imagen = document.querySelector("img");
const sinImagen = document.querySelector("#sinImagen");
const capturarFoto = document.querySelector(".capturar-foto");

// para crear un post
let arrayPost = [];
let imagenBlob;

// Acciones botón cámara
camara.type = "file";
camara.accept = "image/*";
camara.capture = "environment";

buttoncamara.addEventListener("click", ()=> { camara.click() })
camara.addEventListener("change", ()=> {
    imagen.src = URL.createObjectURL(camara.files[0]) //formato BLOB
    imagen.addEventListener("load", ()=> {
        // Funcion agregar a Mockapi
        crearCanvasDeImagen();
        //console.log(crearCanvasDeImagen()) 
    })
})




// ###############
// ### Metodos ###

function notificarOperacion(mensaje, cssClass) {
    divNotificaciones.textContent = mensaje
    divNotificaciones.classList.add(cssClass)
    divNotificaciones.style.opacity = "1"
    setTimeout(() => {
        divNotificaciones.style.opacity = "0"
        divNotificaciones.classList.remove(cssClass)
    }, 4000);
}

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")
function crearCanvasDeImagen() {
    // limpia el sin imagen
    sinImagen.style.display = 'none';
    canvas.width = 400
    canvas.height = 600
    // Limpia el canvas, si existe
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagen, 0, 0, 400, 600)
    capturarFoto.appendChild(canvas)
    imagenBlob = canvas.toDataURL("image/webp") //formato base64
    return imagenBlob
}


// Acción botón publicar post
btnPublicar.addEventListener("click", () => {
    createPost();
});


// para crear el post
function createPost() {
    // Mostrar el elemento de carga
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block";

    let titleValue = document.getElementById("title").value
    if (!titleValue){
        loadingElement.style.display = "none";
        return notificarOperacion("Debe agregar un título para el post", "message-error");
    }
    if (!imagenBlob){
        loadingElement.style.display = "none";
        return notificarOperacion("Debe agregar una foto nueva para el post", "message-error");
    }
    
    let countFavorite = Math.floor(Math.random() * 999) + 1;
    let countComment = Math.floor(Math.random() * 999) + 1;
    
    const fechaActual = Date.now();
    // Convierte la fecha actual a segundos (dividiendo por 1000)
    const fechaUnix = Math.floor(fechaActual / 1000);

    const newPost = {
            title: titleValue,
            imagen: imagenBlob,
            countFavorite: countFavorite,
            countComment: countComment,
            date: fechaUnix
        }

    console.log(JSON.stringify(newPost));

    fetch(URLApi, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newPost)
    }).then((response)=> {
        if (response.ok) {
            loadingElement.style.display = "none";
            document.getElementById("title").value = "";
            imagenBlob = "";
            return response.json()
        } else {
            loadingElement.style.display = "none";
            throw new Error("No se pudo crear el post.")
        }
    }).then((task)=> {
        notificarOperacion("El post fue agregado con éxito.", "message-ok")
    } ).catch((error)=> notificarOperacion("No se pudo crear el post.", "message-error"))
}


