let amigos = []; // Creo la variable "amigos" que es donde se almacenara el nombre de las personas que van a ser parte del sorteo function agregarAmigo
//Se crea la funcion que va a almacenar los nombres ingresados.
function agregarAmigo() {
const input = document.getElementById ("amigo");
const nombre =  input.value.trim(); // trim: quita espacios al inicio y final.

//Realizamos un if para implementar una validación para asegurarse de que el campo no esté vacío.
if (nombre === ""){
    alert("Por favor, inserte un nombre.");
    input.focus(); // Devuelve el cursor al campo para que pueda escribir.
    return;
    }
amigos.push(nombre); // Para agregar un nuevo amigo a la lista.
input.value = ""; //Borra el texto que estaba en el campo para que el usuario pueda escribir otro nombre.
actualizarLista(); //Actualiza la lista en la pantalla.
}
//Se crea la funcion que nos va ayudar a actualizar la lista.
function actualizarLista(){
const lista = document.getElementById("listaAmigos");
lista.innerHTML = ""; // Vacía la lista antes de volver a llenarla para evitar duplicados.

//Itirarar para recorrer el Array
for (let i = 0;i < amigos.length; i++){
    const elementoLista = document.createElement("li"); //Creamos un nuevo elemento de lista <li>
    elementoLista.textContent = amigos[i];
    lista.appendChild (elementoLista);//Agregamos el <li> como hijo del <ul>
    }
}
//Se crea la función para Sortear los amigos.
function sortearAmigo (){

    
}

