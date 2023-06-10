# JSON
 ## *¿Que es?*
 Json (Javascript Object Notation) es un Formato ligero de intercambio de datos, ademas es de facil lectura y escritura para los usuariosademas es facil de analizar por parte de las maquinas, este se basa en un subconjunto del lenguaje de programacion Java Scrip Estandar ECMA-262 3aEdición - Diciembre de 1999. JSON es un formato de texto completamente independiente del lenguaje, pero que utiliza convenios que resultan familiares a los programadores de lenguajes de la familia C, incluidos C, C++, C#, Java™, JavaScript, Perl, Python y mucho otros. Estas características hacen de JSON un lenguaje de intercambio de datos ideal. Dado el siguiente objeto de negocio:
![visual studio code logo](JSON.code.png)

Tabla 1 Objeto de negocio con propiedades y valores.

|objeto de negocio    | propiedad     | valor         |
|-----------------    | --------------| ------------- |
|customer             | firstName     | John          |
| address             | lastName      | Smith         |
|                     | streetAddress | 21 2nd Street |
|                     | city          | New York      |
|                     | state         | NY            |
|                     | postalCode    | 10121         |
|                     | phoneNumbers  | 212-732-1234  |
|                     | phoneNumbers  | 646-123-4567  |
 
El formato JSON es el siguiente:

1	{
2	    "firstName": "John",
3	    "lastName": "Smith",
4	    "address": {
5	        "streetAddress": "21 2nd Street",
6	        "city": "New York",
7	        "state": "NY",
8	        "postalCode": 10021
9	    },
10	    "phoneNumbers": [
11	        "212-732-1234",
12	        "646-123-4567"
13	    ]
14	}
 
 
 ```javascript
 //Creamos un objeto
 var myObject = {
   nombre : "juan",
    edad : 50,
     genero : "masculino",
      estatura : 1.65,
       nacionalidad : "mexicana",
        estado : "oaxaca"

};
// accedemos a las propiedades usando notacion corchetes y ademas sin utilizar comillas
var propiedad = "nombre";
var propiedad2 = "edad";
var propiedad3 = "genero";

console.log(myObject[propiedad]);
console.log(myObject[propiedad2]);
console.log(myObject[propiedad3]);
 
