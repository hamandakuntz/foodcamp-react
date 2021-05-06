import React from "react";

export default function Item(props) {  
  const [ehSelecionado, setEhSelecionado] = React.useState(false);
  const [contador, setContador] = React.useState(1);
  const {nomeItem, classe, descricao, preco, imagem} = props;
  const {todosItens, setTodosItens} = props;

  return (
    <>
      <li
        onClick={alteraSelecionado}
        class={`pratos ${classe} ${ehSelecionado ? "selecionado" : ""}`}
      >
        <img src={imagem} alt={nomeItem} />
        <span>{nomeItem}</span>
        <div class="info">
          <span class="descrição">{descricao}</span>
          <div class="info2">
            <span>{preco}</span>
            <span>
              <button onClick={(e) => alteraContador(e, "-")} class="contador">
                -
              </button>
              {contador}
              <button onClick={(e) => alteraContador(e, "+")} class="contador">
                +
              </button>
            </span>
          </div>
        </div>
      </li>
    </>
  );

  function alteraSelecionado() {
    ehSelecionado ? setEhSelecionado(false) : setEhSelecionado(true);
    if(ehSelecionado) {
      reseta();
      excluiItens();
    } else {
      incluiItens();
    }    
  }

  function reseta() {
    setEhSelecionado(false);
    setContador(1);
  }

  function alteraContador(e, operacao) {
    e.stopPropagation();

    if (operacao === "-") {
      contador > 1 ? setContador(contador - 1) : reseta();
    } else {
      setContador(contador + 1);
    }
  }  

  function incluiItens(){  
    const itemSelecionado = {
      nome: nomeItem,
      preco: preco,
      contador: contador,
    }    
    const novaArray = [...todosItens, itemSelecionado];
    setTodosItens(novaArray);  
  }

  function excluiItens(){
    const novaArray = todosItens.filter((item) => item.nome !== nomeItem);
    setTodosItens(novaArray);
  }
}
