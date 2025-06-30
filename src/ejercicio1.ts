// Ejercicio 1: Clase CabeceraPagina
class CabeceraPagina {
  private titulo: string = "";
  private color: string = "";
  private fuente: string = "";
  private alineacion: string = "";

  asignarEstilos(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  definirAlineacion(alineacion: string): void {
    const opciones = ["izquierda", "centrado", "derecha"];
    if (opciones.includes(alineacion.toLowerCase())) {
      this.alineacion = alineacion;
    } else {
      console.log("Alineación inválida");
    }
  }

  mostrarCabecera(): void {
    console.log("Título:", this.titulo);
    console.log("Color:", this.color);
    console.log("Fuente:", this.fuente);
    console.log("Alineación:", this.alineacion);
  }
}

// Prueba
const cabecera = new CabeceraPagina();
cabecera.asignarEstilos("Mi página", "rojo", "Arial");
cabecera.definirAlineacion("centrado");
cabecera.mostrarCabecera();