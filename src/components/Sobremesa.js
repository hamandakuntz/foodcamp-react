import React from "react";

export default function Sobremesa(props) {
  const [ehSelecionado, setEhSelecionado] = React.useState(false);
  const {imagem, sobremesa, descricao, preco, contador} = props;

  return (
    <>
      <li onClick={alteraSelecionado} class={`pratos sobremesa1 ${ehSelecionado ? "selecionado" : ""}`}>
        <img src={imagem} alt={sobremesa}/>
        <span>{sobremesa}</span>
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
