let amigos = []; // Creo la variable "amigos" que es donde se almacenara el nombre de las personas que van a ser parte del sorteo function agregarAmigo
//se crea la funcion que va a almacenar los nombres ingresados.
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


}