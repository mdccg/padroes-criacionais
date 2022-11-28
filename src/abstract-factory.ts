interface Botao {
  clicar(): string;
}

interface Checkbox {
  marcar(): string;
}

interface FabricaAbstrata {
  criarBotao(): Botao;
  criarCheckbox(): Checkbox;
}

class BotaoAndroid implements Botao {
  public clicar(): string {
    return 'Clicando em um botão em um dispositivo Android...';
  }
}

class CheckboxAndroid implements Checkbox {
  public marcar(): string {
    return 'Marcando uma caixa de seleção em um dispositivo Android...';
  }
}

class FabricaAndroid implements FabricaAbstrata {
  public criarBotao(): Botao {
    return new BotaoAndroid();
  }

  public criarCheckbox(): Checkbox {
    return new CheckboxAndroid();
  }
}

class BotaoIOS implements Botao {
  public clicar(): string {
    return 'Clicando em um botão em um dispositivo iOS...';
  }
}

class CheckboxIOS implements Checkbox {
  public marcar(): string {
    return 'Marcando uma caixa de seleção em um dispositivo iOS...';
  }
}

class FabricaIOS implements FabricaAbstrata {
  public criarBotao(): Botao {
    return new BotaoIOS();
  }

  public criarCheckbox(): Checkbox {
    return new CheckboxIOS();
  }
}

function codigoCliente(fabrica: FabricaAbstrata) {
  const botao = fabrica.criarBotao();
  const checkbox = fabrica.criarCheckbox();

  console.log(botao.clicar());
  console.log(checkbox.marcar());
}

console.log('App: Testando o código cliente com o primeiro tipo de fábrica.');
codigoCliente(new FabricaAndroid());

console.log('');

console.log('App: Testando o código cliente com o segundo tipo de fábrica.');
codigoCliente(new FabricaIOS());

export default {};