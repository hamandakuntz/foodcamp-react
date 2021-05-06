import Pratos from "./Pratos";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";
import FinalizarPedido from "./FinalizarPedido";
import React from "react";

export default function Conteudo() {
  const [todosPratos, setTodosPratos] = React.useState([]);
  const [todasBebidas, setTodasBebidas] = React.useState([]);
  const [todasSobremesas, setTodasSobremesas] = React.useState([]);
  let todos = true;

  if(todosPratos.length > 0 && todasBebidas.length > 0 && todasSobremesas.length > 0) {
    todos = false;
  }



  console.clear()
  console.log(todosPratos)
  console.log(todasBebidas)
  console.log(todasSobremesas)
  return (
    <body>
      <div class="conteudo">
        <Pratos
          todosPratos={todosPratos}
          setTodosPratos={setTodosPratos}
        />
        <Bebidas
          todasBebidas={todasBebidas}
          setTodasBebidas={setTodasBebidas}
        />
        <Sobremesas
          todasSobremesas={todasSobremesas}
          setTodasSobremesas={setTodasSobremesas}
        />
        <FinalizarPedido todos={todos}   
        />
      </div>
    </body>
  );
}
