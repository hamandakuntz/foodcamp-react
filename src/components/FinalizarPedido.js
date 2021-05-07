import React from "react";

export default function FinalizarPedido(props) {
  const { todosPratos, todasBebidas, todasSobremesas } = props;
  const controlaBotao = props.todos;

  console.log(todosPratos)
  
  return (
    <div className="base">
      <button
        onClick={fecharPedido}
        className="selecionar-pedido"
        disabled={controlaBotao}
      >
        {controlaBotao
          ? "Selecione os 3 itens para fechar seu pedido"
          : "Fechar pedido"}
      </button>
    </div>
  );

  function fecharPedido() {
    let pratos = "";  
    let bebidas = "";
    let sobremesas = "";
    let precoPratoTotal = 0;
    let precoBebidaTotal = 0;
    let precoSobremesaTotal = 0;
    let precoTotal = 0;  
  
    const novosValoresPratos = todosPratos.map((item) => ((parseFloat(item.preco.replace(",",".")))*item.contador)); 
    novosValoresPratos.forEach((precoItem) => {precoPratoTotal += precoItem})
    console.log(precoPratoTotal)

    const novosValoresBebidas = todasBebidas.map((item) => ((parseFloat(item.preco.replace(",",".")))*item.contador)); 
    novosValoresBebidas.forEach((precoItem) => {precoBebidaTotal += precoItem})
    
    const novosValoresSobremesas = todasSobremesas.map((item) => ((parseFloat(item.preco.replace(",",".")))*item.contador)); 
    novosValoresSobremesas.forEach((precoItem) => {precoSobremesaTotal += precoItem})

    precoTotal = (precoPratoTotal + precoBebidaTotal + precoSobremesaTotal).toFixed(2); 
    
    todosPratos.forEach((item) => {pratos += item.nome + " (" + item.contador + "x), "}) 
    
    todasBebidas.forEach((item) => {bebidas += item.nome + " (" + item.contador + "x), "})
   
    todasSobremesas.forEach((item) => {sobremesas += item.nome + " (" + item.contador + "x), "})

    window.location.href =
      "https://wa.me/?text=" +
      encodeURIComponent(
        `Olá, gostaria de fazer o pedido: - Prato(s): ${pratos} - Bebida(s): ${bebidas} - Sobremesa(s): ${sobremesas} Total: R$ ${precoTotal}`
      );
  }
}
