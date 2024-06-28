let numero_index = 0;
let data = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const boton_funcion = document.getElementById("btn"); //Se crea la Variable para el botón
const titulo = document.getElementById("title"); //Se crea la variable para el título
const contenido = document.getElementById("content"); //Se crea la variable para contenido
const video_yt = document.getElementById("video"); //Se crea la variable para el vídeo de youtube

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      //Para verificar si todo está OK
      data = JSON.parse(request.responseText); //Pasa la cadena del Array A entero
      cambiar_video();
    }
  };
  request.open("GET", "ajax.json"); //Se solicita abrir el documento Json
  request.send();
}

function cambiar_video() {
  // Sólo llamar al proceso getData si no se recuperan datos de ajax.json
  if (data.length === 0) {
    getData();
    return;
  }
  const newData = data[numero_index];
  titulo.textContent = newData.title;
  contenido.textContent = newData.content;
  video_yt.src = newData.url;
}
// Describe el proceso cuando se hace clic en el botón.
boton_funcion.addEventListener("click", function () {
  numero_index == 2 ? (numero_index = 0) : numero_index++; //Cada vez que se dé clic y el número llegue a dos volver a cero para que quede en bucle
  cambiar_video();
});

window.onload = cambiar_video;
