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
    const opciones: { [key: string]: string } = {
      izquierda: "left",
      centrado: "center",
      derecha: "right"
    };

    const valor = opciones[alineacion.toLowerCase()];
    if (valor) {
      this.alineacion = valor;
    } else {
      console.log("Alineación no válida.");
    }
  }

  // 👇 AQUÍ va tu método para mostrar el contenido en pantalla
  mostrarCabecera(): void {
    const contenedor = document.getElementById("resultado");
    if (contenedor) {
      contenedor.innerHTML = `
        <h2 style="
          color: ${this.color};
          font-family: ${this.fuente}, sans-serif;
          text-align: ${this.alineacion};
        ">
          ${this.titulo}
        </h2>
      `;
    }
  }
}
const cabecera = new CabeceraPagina();
cabecera.asignarEstilos("Mi página", "red", "Arial");
cabecera.definirAlineacion("centrado");
cabecera.mostrarCabecera();