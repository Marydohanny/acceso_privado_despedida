function abrirCarta(){

document.querySelector(".tapa").style.transform="rotateX(180deg)";

setTimeout(()=>{

document.getElementById("sobre").classList.add("ocultar");

document.getElementById("carta").classList.add("mostrar");

escribir();

},1000);

}

const mensaje=`Tal vez todas las cosas que han pasado nos hicieron comprender que nuestra historia ya no estaba avanzando como esperábamos.
Quiero que sepas que cada recuerdo que compartimos siempre tendrá un lugar especial en mi corazón.
Gracias por las risas, por los momentos bonitos y también por las lecciones que me dejó este camino. Gracias por tenerme mucha paciencia, nunca pense que me llegarás a querer tanto
Te deseo de todo corazón que encuentres mucha felicidad, paz y personas que te hagan sonreír cada día.
Siempre voy a agradecer que hayas formado parte de mi vida y que hayas sido tenido mucha amabilidad conmigo.
Te recuerdo Con mucho cariño. ❤️`;

let i=0;

function escribir(){

if(i<mensaje.length){

document.getElementById("texto").innerHTML+=mensaje.charAt(i);

i++;

setTimeout(escribir,35);

}

}