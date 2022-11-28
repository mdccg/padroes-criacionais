class Singleton {
  private static _instancia: string;

  private constructor() { }

  public static getInstancia(): string {
    if (!Singleton._instancia) {
      Singleton._instancia = 'Banco de dados conectado';
    }

    return Singleton._instancia;
  }
}

class ExemploErrado {
  public instancia: string;

  constructor() {
    this.instancia = 'Sou uma instância única';
  }
}

function codigoCliente() {
  const singleton1 = Singleton.getInstancia();
  const singleton2 = Singleton.getInstancia();

  console.log(singleton1 === singleton2);
}

console.log('Singleton:');
codigoCliente();

console.log('');

console.log('Exemplo errado:');
const exemploErrado1 = new ExemploErrado();
const exemploErrado2 = new ExemploErrado();
console.log(exemploErrado1 === exemploErrado2);

export default {};