interface Builder {
  adicionarAssentos(): void;
  adicionarArCondicionado(): void;
  adicionarNitro(): void;
}

class Carro {
  public partes: string[] = [];

  public listarPartes(): void {
    console.log(`Partes do carro: ${this.partes.join(', ')}\n`);
  }
}

class BuilderCarro implements Builder {
  private carro: Carro;

  constructor() {
    this.resetar();
  }

  public resetar(): void {
    this.carro = new Carro();
  }

  public adicionarAssentos(): void {
    this.carro.partes.push('Assentos');
  }

  public adicionarArCondicionado(): void {
    this.carro.partes.push('Ar condicionado');
  }

  public adicionarNitro(): void {
    this.carro.partes.push('Nitro');
  }

  public getCarro(): Carro {
    const resultado = this.carro;
    this.resetar();
    return resultado;
  }
}

class Diretor {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public constroiProdutoMinimoViavel(): void {
    this.builder.adicionarAssentos();
  }

  public constroiProdutoCompleto(): void {
    this.builder.adicionarAssentos();
    this.builder.adicionarArCondicionado();
    this.builder.adicionarNitro();
  }
}

function codigoCliente(diretor: Diretor) {
  const builder = new BuilderCarro();
  diretor.setBuilder(builder);

  console.log('Carro básico:');
  diretor.constroiProdutoMinimoViavel();
  builder.getCarro().listarPartes();

  console.log('Carro avançado:');
  diretor.constroiProdutoCompleto();
  builder.getCarro().listarPartes();

  console.log('Carro customizado:');
  builder.adicionarAssentos();
  builder.adicionarNitro();
  builder.getCarro().listarPartes();
}

const diretor = new Diretor();
codigoCliente(diretor);

export default {};