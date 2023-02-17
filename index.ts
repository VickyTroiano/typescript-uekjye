// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  private nombre:string;
  private apellido:string;
  private añoNac:number;

  constructor(nombre:string, apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  public toString() :string
  {
    return this.nombre + this.apellido;
  }

}