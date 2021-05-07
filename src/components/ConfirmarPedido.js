import { Link } from "react-router-dom";

export default function ConfirmarPedido(props) {
  const { todosPratos, todasBebidas, todasSobremesas } = props.location;
  let pratos = "";
  let bebidas = "";
  let sobremesas = "";
  let precoPratoTotal = 0;
  let precoBebidaTotal = 0;
  let precoSobremesaTotal = 0;
  let precoTotal = 0;

  function fecharPedido() {
    const novosValoresPratos = todosPratos.map(
      (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
    );

    novosValoresPratos.forEach((precoItem) => {
      precoPratoTotal += precoItem;
    });   

    const novosValoresBebidas = todasBebidas.map(
      (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
    );
    novosValoresBebidas.forEach((precoItem) => {
      precoBebidaTotal += precoItem;
    });

    const novosValoresSobremesas = todasSobremesas.map(
      (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
    );
    novosValoresSobremesas.forEach((precoItem) => {
      precoSobremesaTotal += precoItem;
    });

    precoTotal = (
      precoPratoTotal +
      precoBebidaTotal +
      precoSobremesaTotal
    ).toFixed(2);

    todosPratos.forEach((item) => {
      if (item.contador === 0) {
        return;
      } else pratos += item.nome + " (" + item.contador + "x) ";
    });

    todasBebidas.forEach((item) => {
      if (item.contador === 0) {
        return;
      } else bebidas += item.nome + " (" + item.contador + "x) ";
    });

    todasSobremesas.forEach((item) => {
      if (item.contador === 0) {
        return;
      } else sobremesas += item.nome + " (" + item.contador + "x) ";
    });
    
    window.location.href =
      "https://wa.me/?text=" +
      encodeURIComponent(
        `Olá, gostaria de fazer o pedido: - Prato(s): ${pratos} - Bebida(s): ${bebidas} - Sobremesa(s): ${sobremesas} Total: R$ ${precoTotal}`
      );
  }

  let pratos2 = "";
  let bebidas2 = "";
  let sobremesas2 = "";
  let precoPratoTotal2 = 0;
  let precoBebidaTotal2 = 0;
  let precoSobremesaTotal2 = 0;
  let precoTotal2 = 0;

  const novosValoresPratos2 = todosPratos.map(
    (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
  );
  novosValoresPratos2.forEach((precoItem) => {
    precoPratoTotal2 += precoItem;
  });

  const novosValoresBebidas2 = todasBebidas.map(
    (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
  );
  novosValoresBebidas2.forEach((precoItem) => {
    precoBebidaTotal2 += precoItem;
  });

  const novosValoresSobremesas2 = todasSobremesas.map(
    (item) => parseFloat(item.preco.replace(",", ".")) * item.contador
  );
  novosValoresSobremesas2.forEach((precoItem) => {
    precoSobremesaTotal2 += precoItem;
  });

  precoTotal2 = (
    precoPratoTotal2 +
    precoBebidaTotal2 +
    precoSobremesaTotal2
  ).toFixed(2);

  todosPratos.forEach((item) => {
    if (item.contador === 0) {
      return;
    } else pratos2 += item.nome + " (" + item.contador + "x) ";
  });

  todasBebidas.forEach((item) => {
    if (item.contador === 0) {
      return;
    } else bebidas2 += item.nome + " (" + item.contador + "x) ";
  });

  todasSobremesas.forEach((item) => {
    if (item.contador === 0) {
      return;
    } else sobremesas2 += item.nome + " (" + item.contador + "x) ";
  });

  return (
    <div className="fundo">
      <h1>Revise seu pedido</h1>
      <div className="confirmar">
        <div className="pedido">
          <div className="itens-pedido">
            <span className="prato-escolhido estilo">
              {pratos2}
              <n />
              <n />
              {precoPratoTotal2.toFixed(2)}
            </span>
            <span className="prato-escolhido estilo">
              {bebidas2} <n />
              {precoBebidaTotal2.toFixed(2)}
            </span>
            <span className="prato-escolhido estilo">
              {sobremesas2} <n />
              {precoSobremesaTotal2.toFixed(2)}
            </span>
            <span>
              <span className="preco">
                <span></span>
                <strong>
                  TOTAL R$ {precoTotal2}
                </strong>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="botoes-revisao">
        <button className="confirmar-pedido" onClick={fecharPedido}>
          <span>Tudo certo, pode pedir!</span>
        </button>
        <Link to="/">
          <button className="cancelar-pedido">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}
