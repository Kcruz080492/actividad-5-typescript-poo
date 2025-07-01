class Cancion {
  public titulo: string;
  public genero: string;
  private autor: string = "";

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  // Setter
  setAutor(nombre: string): void {
    this.autor = nombre;
  }

  // Getter
  getAutor(): string {
    return this.autor;
  }

  mostrarDatos(): string {
    return `
      🎵 <strong>Título:</strong> ${this.titulo} <br>
      🎶 <strong>Género:</strong> ${this.genero} <br>
      👤 <strong>Autor:</strong> ${this.getAutor()}
    `;
  }
}

// Interacción con HTML
const formulario = document.getElementById("form-cancion") as HTMLFormElement;
const resultado = document.getElementById("resultado3") as HTMLDivElement;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
  const genero = (document.getElementById("genero") as HTMLInputElement).value;
  const autor = (document.getElementById("autor") as HTMLInputElement).value;

  const cancion = new Cancion(titulo, genero);
  cancion.setAutor(autor);

  resultado.innerHTML = cancion.mostrarDatos();
});
