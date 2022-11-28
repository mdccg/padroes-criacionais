import { Fila } from './classes/Fila';

class Prototipo {
  public fila: Fila<number>;

  public clonar(): this {
    const clone = Object.create(this);
    clone.fila = Object.create(this.fila);
    return clone;
  }
}

function codigoErrado() {
  const fila1 = new Fila<number>();
  fila1.enfileirar(1);
  
  const fila2 = fila1;
  fila2.enfileirar(2);
  
  fila1.imprimirFila();
  fila2.imprimirFila();
}

function codigoCliente() {
  const prototipo1 = new Prototipo();
  
  prototipo1.fila = new Fila<number>();
  prototipo1.fila.enfileirar(1);
  
  const prototipo2 = prototipo1.clonar();
  prototipo2.fila.enfileirar(2);
  
  prototipo1.fila.imprimirFila();
  prototipo2.fila.imprimirFila();
}

console.log('Sem clone:');
codigoErrado();

console.log('');

console.log('Com clone:');
codigoCliente();

export default {};