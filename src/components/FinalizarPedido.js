import React from "react";
import { Link } from "react-router-dom";

export default function FinalizarPedido(props) {
  const { todosPratos, todasBebidas, todasSobremesas } = props;
  const controlaBotao = props.todos;

  console.log(todosPratos);

  return (
    <div className="base">
      <Link to={{pathname: "/confirmarpedido", todosPratos, todasBebidas, todasSobremesas }}>
        <button          
          className="selecionar-pedido"
          disabled={controlaBotao}
        >
          {controlaBotao
            ? "Selecione os 3 itens para fechar o pedido"
            : "Fechar pedido"}
        </button>
      </Link>
    </div>
  );   
}
