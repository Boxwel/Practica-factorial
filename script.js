function procesarNum() {
    // Obtener el valor del input
    const input = document.querySelector(".form-control");
    const numero = parseInt(input.value);

    // Obtener contenedor donde va el resultado
    const salida = document.getElementById("resultadoNum");

    // Validaciones
    if (isNaN(numero) || numero < 0) {
        salida.textContent = "Por favor ingresa un número válido mayor o igual a 0.";
        return;
    }

    // Calcular factorial
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar resultado
    salida.textContent = `El factorial de ${numero} es: ${factorial}`;
}
