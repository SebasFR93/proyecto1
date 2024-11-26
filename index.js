

// Se declaran variables

function calcularEdadHumana() {
    let edadP = parseInt(document.getElementById("edadP").value);
    let edadH = edadP * 7;
    
    if (edadP <= 0) {
        alert("Edad del pero debe ser mayor a 0 ");
    } else if ( isNaN (edadP)) {
        alert("Edad del perro debe ser un número ");
    } else {
        
        alert("La edad del perro en años humanos es " + edadH);
        
    }
}
//------------------------------------------------------------------------
// Calculadora de costos de viajes

function calcularCoste() {
    // Obtener los valores de los inputs
    let alojamiento = parseFloat(document.getElementById("alojamiento").value);
    let alimentacion = parseFloat(document.getElementById("alimentacion").value);
    let entretenimiento = parseFloat(document.getElementById("entretenimiento").value);

    // Calcular el coste total
    let costeTotal = alojamiento + alimentacion + entretenimiento;

    if (alojamiento <= 0 || alimentacion <= 0 || entretenimiento <= 0) {
        alert("Los costes deben ser mayores a 0");
    } else if ( isNaN (alojamiento) || isNaN (alimentacion) || isNaN (entretenimiento)) {
        alert("Los costes deben ser números");
    } else {
        alert("El coste total del viaje es: " + costeTotal.toFixed(2) + " COP");
    }
}

//------------------------------------------------------------------------
// Calculadora de IMC

function calcularIMC() {
    // Obtener los valores de peso y altura
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Calcular   
 
    let imc = peso / (altura * altura);

    // Clasificar el IMC
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    alert ("El IMC de tu cuerpo es: " + imc.toFixed(2) + " y se clasifica como: " + clasificacion);
}

//------------------------------------------------------------------------
//Generador de secuencia Fibonacci

// Función para generar los primeros N términos de la secuencia Fibonacci
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Solicitamos al usuario el número de términos de la secuencia Fibonacci que desea generar
//let numTerms = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci que deseas generar:"));
let numTerms = parseInt(document.getElementById("Inserta el número de términos de la secuencia Fibonacci que deseas generar: ").value);



// Verificamos si el usuario insertó un número válido
if (!isNaN(numTerms) && numTerms > 0) {
    alert(`Los primeros ${numTerms} términos de la secuencia Fibonacci son: ${fibonacci(numTerms).join(', ')}`);
} else {
    alert("Error: Inserta un número válido mayor que cero.");
}