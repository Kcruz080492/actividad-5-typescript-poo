class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  depositar(): string {
    if (this.cantidad < 5) {
      return "❌ El valor a depositar debe ser mayor a $5.00";
    } else {
      return `✅ Se ha depositado correctamente $${this.cantidad.toFixed(2)}`;
    }
  }

  retirar(valor: number): string {
    if (valor < 5) {
      return "❌ No se puede retirar menos de $5.00";
    } else if (this.cantidad < valor) {
      return "❌ Fondos insuficientes";
    } else {
      this.cantidad -= valor;
      return `✅ Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }
  }

  mostrarDatos(): string {
    return `
      👤 <strong>Nombre:</strong> ${this.nombre} <br>
      🏦 <strong>Tipo de Cuenta:</strong> ${this.tipoCuenta} <br>
      🔢 <strong>Número:</strong> ${this.numeroCuenta}
    `;
  }
}

// --- Interacción con HTML ---
const formCuenta = document.getElementById("form-cuenta") as HTMLFormElement;
const btnRetirar = document.getElementById("btn-retirar") as HTMLButtonElement;
const output = document.getElementById("resultado4") as HTMLDivElement;
let cuenta: Cuenta;

formCuenta.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
  const tipo = (document.getElementById("tipoCuenta") as HTMLInputElement).value;
  const numero = (document.getElementById("numeroCuenta") as HTMLInputElement).value;

  cuenta = new Cuenta(nombre, cantidad, tipo, numero);
  const mensajeDeposito = cuenta.depositar();

  // Mostrar siempre el mensaje del depósito
  output.innerHTML = mensajeDeposito;

  // Solo si el depósito fue válido, mostrar los datos
  if (cantidad >= 5) {
    output.innerHTML += "<br><br>" + cuenta.mostrarDatos();
  }
});

btnRetirar.addEventListener("click", () => {
  const valor = parseFloat(prompt("¿Cuánto desea retirar?") || "0");
  const mensaje = cuenta ? cuenta.retirar(valor) : "⚠️ Cuenta no registrada aún.";
  output.innerHTML += "<br><br>" + mensaje;
});

