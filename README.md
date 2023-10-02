# Mi Proyecto Simulacro de Instagram

![Logo de Mi Proyecto](https://mathieuclaudio.github.io/MyInstagram/img/logo.png)

## Instalación
```bash
## Clonar el repositorio usando `git clone`
git https://github.com/MathieuClaudio/MyInstagram.git


## Visualizar en Git Pages
https://mathieuclaudio.github.io/MyInstagram/

```


## Tareas realizadas
Cree un repositorio público en Github: https://github.com/MathieuClaudio/MyInstagram

Desarrolle el inicio de la app (primera maqueta HTML y CSS) y subí a Github la primera versión.

Habilite la opción de "Page": https://mathieuclaudio.github.io/MyInstagram/

Cree cuenta en Mokapi.com con la cuenta gmail de istea.

Mejore los iconos del footer haciendo que sea una barra fija en la parte baja de la app, agregué la sección para mostrar el título, los me gusta, comentarios y fecha en cada post.

Agregue un  id a cada icono funcional y comencé con el JS agregando un evento listener a cada icono.

Agregue una elemento section con id posts al index.html para ahora cargar dinámicamente con JS cada article de tipo post.

Cree la primera función llamada getPosts() para obtener todos los post.

Por el momento realizo las pruebas con un arrayPost que si está vacío carga los datos desde el array postEmpty donde está los necesario para que el usuario sepa que aún no ha cargado post.

Cree mi primer endpoint en Mokapi.com, le cargue los datos que tenía jarcodeados en mi arrayPost y modifique la funcion getPosts() para ahora obtener los datos desde el endpoint y mostrarlos en pantalla.

Estructura:

![estructura Mockapi](/img/estructura_mockapi.png)

### Continué agregando los requerimientos y funcionalidades solicitadas:
- [x] Similar a Instagram
- [x] Solo para dispositivos celulares
- [x] Funcionalidad de cámara
- [x] Utilizar Mockapi.io
- [x] convertir imagen a Base64
- [x] Datos extra a publicar; título, fecha al momento de la publicación, me gusta (N° al azar entre 1 y 999) , comentarios (N° al azar entre 1 y 999)
- [x] Manifiesto para instalación
- [x] App en vertical
- [x] Ordenamiento descendente
- [x] index.html:  
  - Se inicia sin post y el sistema indica publicar su primer post  
  - Cada foto en una Card HTML. Usé el elemento article con clase post ya que contiene la foto y algunos datos extras. cada foto es un post  
  - Datos post: id, título, imagen + fecha y hora. 2 datos agregados (cantidad de me gusta y comentarios)  
  - Posibilidad de agregar imagen post. Botón +
- [x] **camara.html:**
    - Botón Cámara: Abre la cámara o el explorador de carpetas según el dispositivo. En principio, el sistema muestra una típica sin imagen y al sacar la foto, la cambia.
    - Botón Publicar: Publica el post. Valida título e imagen y luego publica en Mockapi.io.
    - Después de publicar, debe cargar un nuevo título y no le permite publicar la imagen ya cargada. Siempre se debe cargar una nueva imagen.
    - Se puede sacar varias fotos pero siempre muestra la última.
    **Extra:** Agregué un loading en el último momento, así que me quedó un poco desprolijo, pero funciona bien :)

En la carpeta "imagenes-ejemplo", hay imágenes para usar si se prueba desde una PC.



