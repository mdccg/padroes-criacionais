export class Fila<T> {
  public maximo: number;
  public inicio: number;
  public fim: number;
  private _fila: T[];

  constructor(maximo: number = 5) {
    this.maximo = maximo;
    this.inicio = 0;
    this.fim = 0;
    this._fila = [];
  }

  isCheia(): boolean {
    return this.inicio + this.maximo === this.fim;
  }

  isVazia(): boolean {
    return this.inicio === this.fim;
  }

  enfileirar(elemento: T): number {
    if (this.isCheia()) {
      console.log('A fila está cheia.');
      return;
    }

    this._fila[this.fim % this.maximo] = elemento;
    ++this.fim;
  }

  desenfileirar(): T {
    if (this.isVazia()) {
      console.log('A fila está vazia.');
      return;
    }
    
    return this._fila[this.inicio++ % this.maximo];
  }

  imprimirFila(): void {
    const saida: T[] = [];

    for (let i = this.inicio; i < this.fim; ++i) {
      saida.push(this._fila[i % this.maximo]);
    }

    console.log(saida.join(', '));
  }
}