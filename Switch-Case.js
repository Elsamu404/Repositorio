//el siguiente programa debera demotrar el ganador de el juego Roca, Tijeras o Papel de todas las combinaciones posibles
 
function resolverjuego(jugador1,jugador2){
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();
    if (
      (jugador1 === "r" && jugador2 === "t" )||
      (jugador1 === "p" && jugador2 === "r" )||
      (jugador1 === "t" && jugador2 === "p" )
      ){
        return "jugador1 gana";
    } else if(
        (jugador1 === "t" && jugador2 === "r" )||
        (jugador1 === "r" && jugador2 === "p" )||
        (jugador1 === "p" && jugador2 === "t" )
        ){
         return "jugador2 gana";
        } else if (jugador1 === jugador2){
            return "es un empate";
        } else {
            return "entrada invalida";
        }


}
//obtener el orden de la eleccion de los 2 jugadores
var jugador1 = "t"
var jugador2 = "r"
 
//Jugar y verificar si funciona el programa
var Result = resolverjuego(jugador1,jugador2);
console.log(Result)


  
          



   


