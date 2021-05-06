import React from "react";

export default function Prato(props) {
  const [ehSelecionado, setEhSelecionado] = React.useState(false);
  const [contador, setContador] = React.useState(1);
  const { prato, classe, descricao, preco, imagem } = props;

  return (
    <>
      <li
        onClick={alteraSelecionado}
        class={`pratos ${classe} ${ehSelecionado ? "selecionado" : ""}`}
      >
        <img src={imagem} alt={prato} />
        <span>{prato}</span>
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
}
