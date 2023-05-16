// el siguiente codigo deberia resolver una ecuacion cuadratica mediante el metodo de formula general.
function resolverecuacion(a,b,c){
   let formula = b * b - 4 * a * c;
    if(formula < 0){
        return "No hay soluciones reales";
    } else {
        let x1 = (-b + Math.sqrt(formula)) / (2 * a);
        let x2 = (-b - Math.sqrt(formula)) / (2 * a);
         return [x1, x2];
    }
}
// veremos si funciona
let a = 1;
let b = 5;
let c = 4;
let [x1, x2] = resolverecuacion(a, b, c)
// imprimimos el resultado
console.log(x1);
console.log(x2);


  
          



   


