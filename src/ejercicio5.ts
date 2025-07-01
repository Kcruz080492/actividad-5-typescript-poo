abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  esMayorDeEdad(): string {
    return this.edad >= 18 ? "✅ Es mayor de edad" : "⚠️ No es mayor de edad";
  }

  abstract mostrarDatos(): string;
}

class Empleado extends Persona {
  private sueldo: number = 0;

  cargarSueldo(monto: number): void {
    this.sueldo = monto;
  }

  imprimirSueldo(): string {
    return `💰 Sueldo: $${this.sueldo.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `
      👤 <strong>Nombre:</strong> ${this.nombre} ${this.apellido} <br>
      📍 <strong>Dirección:</strong> ${this.direccion} <br>
      📞 <strong>Teléfono:</strong> ${this.telefono} <br>
      🎂 <strong>Edad:</strong> ${this.edad} años <br>
      ${this.esMayorDeEdad()} <br>
      ${this.imprimirSueldo()}
    `;
  }
}

// Interacción con HTML
const formEmpleado = document.getElementById("form-empleado") as HTMLFormElement;
const resultado = document.getElementById("resultado5") as HTMLDivElement;

formEmpleado.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (document.getElementById("nombreEmpleado") as HTMLInputElement).value;
  const apellido = (document.getElementById("apellidoEmpleado") as HTMLInputElement).value;
  const direccion = (document.getElementById("direccion") as HTMLInputElement).value;
  const telefono = (document.getElementById("telefono") as HTMLInputElement).value;
  const edad = parseInt((document.getElementById("edad") as HTMLInputElement).value);
  const sueldo = parseFloat((document.getElementById("sueldo") as HTMLInputElement).value);

  const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
  empleado.cargarSueldo(sueldo);

  resultado.innerHTML = empleado.mostrarDatos();
});
