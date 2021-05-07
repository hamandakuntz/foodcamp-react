import React from "react";

export default function Item(props) {
  const [ehSelecionado, setEhSelecionado] = React.useState(false);
  const [contador, setContador] = React.useState(1);
  const { nomeItem, classe, descricao, preco, imagem } = props;
  const { todosItens, setTodosItens } = props;

  return (
    <>
      <li
        onClick={alteraSelecionado}
        className={`pratos ${classe} ${ehSelecionado ? "selecionado" : ""}`}
      >
        <img src={imagem} alt={nomeItem} />
        <span>{nomeItem}</span>
        <div className="info">
          <span className="descrição">{descricao}</span>
          <div className="info2">
            <span>R$ {preco}</span>
            <span>
              <button
                onClick={(e) => alteraContador(e, "-")}
                className="contador"
              >
                -
              </button>
              {contador}
              <button
                onClick={(e) => alteraContador(e, "+")}
                className="contador"
              >
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
    if (ehSelecionado) {
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
    let controle = false;

    if (operacao === "-") {
      contador > 1 ? setContador(contador - 1) : reseta();
    } else {
      setContador(contador + 1);
      controle = true;
    }

    atualizaContadorItemEspecifico(controle);    
  }

  function atualizaContadorItemEspecifico(controle) {
    
    const itensAtualizados = todosItens.map((item) => {
      if (item.nome === nomeItem) {
        return {
          nome: nomeItem,
          preco: preco,
          contador: (controle ? contador+1 : contador-1),
        };
      } else {
        return item;
      }      
    });
    setTodosItens(itensAtualizados);
    console.log(itensAtualizados)
  }

  function incluiItens() {
    const itemSelecionado = {
      nome: nomeItem,
      preco: preco,
      contador: contador,
    };
    const novaArray = [...todosItens, itemSelecionado];
    setTodosItens(novaArray);
  }

  function excluiItens() {
    const novaArray = todosItens.filter((item) => item.nome !== nomeItem);
    setTodosItens(novaArray);
  }
}
