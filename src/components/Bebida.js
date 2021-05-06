import React from "react";

export default function Bebida(props) {
  const [ehSelecionado, setEhSelecionado] = React.useState(false);
  const { classe, imagem, bebida, descricao, preco, contador } = props;

  return (
    <>
      <li onClick={alteraSelecionado} class={`itens ${classe} ${ehSelecionado ? "selecionado" : ""}`}>
        <img src={imagem} alt={bebida} />
        <span>{bebida}</span>
        <div class="info">
          <span class="descrição">{descricao}</span>
          <div class="info2">
            <span>{preco}</span>
            <span>
              <button class="contador">-</button>
              {contador}
              <button class="contador">+</button>
            </span>
          </div>
        </div>
      </li>
    </>
  );

  function alteraSelecionado() {
    ehSelecionado ? setEhSelecionado(false) : setEhSelecionado(true);    
  }
}
