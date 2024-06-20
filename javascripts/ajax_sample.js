let number = 0;
let data = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById("btn");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      data = JSON.parse(request.responseText);
      changeVideo();
    }
  };
  request.open("GET", "ajax.json");
  request.send();
}

function changeVideo() {
  // Sólo llamar al proceso getData si no se recuperan datos de ajax.json
  if (data.length === 0) {
    getData();
    return;
  }
  const newData = data[number];
  titleArea.textContent = newData.title;
  contentArea.textContent = newData.content;
  videoArea.src = newData.url;
}
// Describe el proceso cuando se hace clic en el botón.
button.addEventListener("click", function () {
  number == 2 ? (number = 0) : number++;
  changeVideo();
});

window.onload = changeVideo;
