
// let nombre = "Hombraegadgfdsgk   fm gfsdngfda g" ;
// let nombres = [ 'Javier', 'Esteban' , 'Agustin' , 'Matias' ] ;
// let edad = [ 54 , 653765 , 654.6546 , 654  ] ;
// let booleanos = [ true , false ] ;

// Accion = Metodos
console.log(carritoConCosas);

let carritoConCosas = ['Frutas', 'Verduras', 'Art. de Limpieza', 'Lacteos'];


// push() : Agrega datos al final ==> 'Art. de Almacen'
carritoConCosas.push('Art. de Almacen');
console.log(carritoConCosas)

// pop() : Elimina el ultimo elemento de un array ==> 'Art. de Alamacen' 
carritoConCosas.pop()
console.log(carritoConCosas)

// shift() : Eliminar el primer elemento de un array ==> 'Frutas' [0]
let carritoModificado = carritoConCosas.shift()
console.log(carritoConCosas)


// unshift() : Agregar uno o mas elementos al INICIO del array ==> 'Art. de Bebe' , 'Carne'
carritoConCosas.unshift('Art. de Bebe', 'Carne', 12, false);
console.log(carritoConCosas)

// join() : Permite unir todos los elementos de un array en un string (cadena de txt).
console.log(carritoConCosas)
carritoConCosas.join()
console.log(carritoConCosas)

// slice() : Sirve para crear un nuevo arreglo a partir de una porcion de un arreglo original. No elimino nada del original, solo tomo una parte y creo un arreglo nuevo.
console.log(carritoConCosas)
carritoConCosas.slice(4)

// splice() : Sirve para eliminar, reemplazar o agregar elementos de un array.
console.log(carritoConCosas);
carritoConCosas.splice(2, 0, 'Bebidas');
console.log(carritoConCosas)

// sort() : Orden de los elementos de un array
console.log(numeros);
numeros.sort();

console.log(carritoConCosas);
carritoConCosas.sort()

// map() : Sirve para ejecutar o procesar operaciones que van a estar dentro del mismo metodo. La salida va a ser un nuevo arreglo con la operacion hecha.

let numeros = [543, 65, 58, 37525, 173, 4, 99];

console.log(numeros);

let numMultiplicados = carrito.map(letra => letra.includes('e'))


console.log(numMultiplicados);


// reduce()


// filter()
