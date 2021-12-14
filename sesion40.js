var numeros=[100,200,300,400]     //crear un arreglo
console.log(numeros);

numeros.push(50);       //agregamos un arreglo al final
console.log(numeros);

numeros.pop();         //eliminamos el ultimo arreglo 
console.log(numeros);

numeros.unshift(80); //agregamos un arreglo al inicio 
console.log(numeros);

numeros.shift();    //eliminamos el arreglo del inicio
console.log(numeros);
//Metodo Slilce()para crear un arreglo Temporal se debe indicar desde donde comienza y donde termina.
var numeros=[19,20,36,44,34,89,90,87,65,98]
console.log (numeros)
console.log(numeros.slice(5,10))

 var nombres =["Priscila" ,"Sánchez" ,"Taipicuri"]
console.log (nombres)

console.log (nombres)
console.log(nombres.slice(0,1))

//Metodo splice() elimina el elemento del indice deseado y agrega otro
console.log(nombres)
nombres.splice(1,0,'Campos')
console.log("slice 0 elementos")
console.log(nombres)
//eliminar un elemento 
nombres.splice(1,2,'Campos')
console.log("slice 1 elementos")
console.log(nombres)
//eliminar dos elementos desde el indice 0 e insertar otras palabras
 nombres =["Campos" ,"Medina" ,"Taipicuri"]
 console.log("slice 2 elementos")
 console.log(nombres)
 nombres.splice(0,2,'Priscila', 'Sánchez')
 console.log(nombres)
 //Método CONCAT() : Une dos arreglos
 console.log("CONCAT()") 
 const array1=['a', 'b','c']
 console.log(array1)
 const array2=['d', 'e','f']
 console.log(array2)
 const array3 = array1.concat(array2);
 console.log(array3);

// Utlilizar CONCAT para unir mas de dos arreglos
 const arreglo1=['a', 'b','c']
 console.log(arreglo1)
 const arreglo2=['d', 'e','f']
 console.log(arreglo2)
 const arreglo3=['g', 'h','i']
 console.log(arreglo3)
 const arreglo4=['j', 'k','l']
 console.log(arreglo4)
 const arreglo5=arreglo1.concat(arreglo2,arreglo3,arreglo4);
 console.log(arreglo5)