class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return b !== 0 ? a / b : NaN;
  }

  potencia(a: number, b: number): number {
    return Math.pow(a, b);
  }

  factorial(n: number): number {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

// Interacción con el HTML
const form = document.getElementById("formulario") as HTMLFormElement;
const resultadoDiv = document.getElementById("resultado2") as HTMLDivElement;
const calc = new Calculadora();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const num1 = parseFloat((document.getElementById("numero1") as HTMLInputElement).value);
  const num2 = parseFloat((document.getElementById("numero2") as HTMLInputElement).value);
  const operacion = (document.getElementById("operacion") as HTMLSelectElement).value;

  let resultado: number;

  switch (operacion) {
    case "sumar":
      resultado = calc.sumar(num1, num2);
      break;
    case "restar":
      resultado = calc.restar(num1, num2);
      break;
    case "multiplicar":
      resultado = calc.multiplicar(num1, num2);
      break;
    case "dividir":
      resultado = calc.dividir(num1, num2);
      break;
    case "potencia":
      resultado = calc.potencia(num1, num2);
      break;
    case "factorial":
      resultado = calc.factorial(num1);
      break;
    default:
      resultado = NaN;
  }

  resultadoDiv.textContent = isNaN(resultado)
    ? "Operación no válida."
    : `Resultado: ${resultado}`;
});
