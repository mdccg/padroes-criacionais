interface Arquivo {
  manipular(): string;
}

class ArquivoProperties implements Arquivo {
  public manipular(): string {
    return 'Manipulando arquivo .properties...';
  }
}

class ArquivoCsv implements Arquivo {
  public manipular(): string {
    return 'Manipulando arquivo .csv...';
  }
}

abstract class Criador {
  public abstract metodoFabrica(): Arquivo;

  public metodoComumAosFilhos(): string {
    const produto = this.metodoFabrica();
    // O código repetido vem aqui...
    return `${produto.manipular()}`;
  }
}

class ManipuladorProperties extends Criador {
  public metodoFabrica(): Arquivo {
    return new ArquivoProperties();
  }
}

class ManipuladorPlanilhas extends Criador {
  public metodoFabrica(): Arquivo {
    return new ArquivoCsv();
  }
}

function codigoCliente(criador: Criador) {
  console.log(criador.metodoComumAosFilhos());
}

console.log('App: Rodou com o ManipuladorProperties.');
codigoCliente(new ManipuladorProperties());
console.log('');

console.log('App: Rodou com o ManipuladorPlanilhas.');
codigoCliente(new ManipuladorPlanilhas());

export default {};