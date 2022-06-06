// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]//se escribe asi cuando no sabemos el numero de parametro.

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var Gisela = [];
  for (var i = 0; i < array.length; i++) {
    Gisela[i] = array[i] + 1;

  }
  return Gisela;


}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let nuevalongitud = array.push(elemento);
  return array


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let nuevalongitud = array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras = palabras.join(" ") //una forma de concatenar strings
  return palabras

  // var frase = "" ; otra forma de concatenar strings.

  //for ( var i = 0 ; i <  palabras.length ; i ++){

  //if ( i < palabras.length - 1 ) {
  // frase = frase + palabras[i] + " "
  // }

  //if ( i === palabras.length - 1 ) {
  // frase = frase + palabras[i]

  // }

  //}
  //return frase;


}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // investigar array.includes(elemento)
  // return array.includes(elemento) resolucion 1
  for (var i = 0; i < array.length; i++) { //otra forma de resolverlo.
    if (array[i] === elemento) {
      return true;
    }

  }
  return false;

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado = resultado + numeros[i];
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    resultado = resultado + resultadosTest[i];
  }
  resultado = resultado / resultadosTest.length;

  return resultado;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //([10, 10, 16, 12])).toBe(16)
  var numeroMasGrande = numeros[0]
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) numeroMasGrande = numeros[i];

  }
  return numeroMasGrande


}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) return 0;
  var multiplicacion = 1
  for (var i = 0; i < arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i];
  }
  return multiplicacion
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) contador++
  }
  return contador


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  if (numeroDeDia < 1 || numeroDeDia < 7) return "Es dia Laboral";


}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var a = String(n)[0]
  if (Number(a) === 9) return true
  return false

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true
    }
    else return false
  }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2 = []

  for (let i = 0; i < array.length; i++) {

    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      array2.push(array[i])

    }
  }  
if (array2.length < 3) {
   return "No se encontraron los meses pedidos"

  } else {
      return array2
    }


 


}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 var array2 = []
  for (let i = 0; i < array.length; i++) {
    
    if (array[i] > 100 ){
    
      array2.push (array[i]) 
      
    }
    
  }
  return array2
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array=[]   //aca con el 10 le estamos indicando que cuando llegue a 10 pare
  for (var i = 0; i < 10; i++ ) {
    
    numero = numero + 2
   
    if(numero === i) break; //break hace que corte la acción
  
   else{
    array.push(numero)
   }
 
  }
 
  if (i < 10) {
    
    return "Se interrumpió la ejecución"
   
   }else {
   
    return array
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array=[]   
  
  for (let i = 0; i < 10; i++ ) {
    
    if (i === 5){
      continue
    }else{
      
      numero = numero + 2 
      array.push(numero)
    }
  } 
    return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
