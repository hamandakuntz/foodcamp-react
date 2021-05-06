import Item from "./Item";
import React from "react";

export default function Pratos(props) {  
  const {todosPratos, setTodosPratos} = props;
  const listaPratos = [
    {
      imagem: "/assets/img/strogonoff.jpg",
      nomeItem: "Strogonoff de Frango",
      classe: "prato1",
      info: {
        descricao: "Clássico, dispensa comentários",
        preco: "R$15,90",        
      },
    },
    {
      imagem: "/assets/img/yinyang.png",
      nomeItem: "Ying Yang",
      classe: "prato2",
      info: {
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 14,90",        
      },
    },
    {
      imagem: "/assets/img/lasanha.jpg",
      nomeItem: "Lasanha à bolonhesa",
      classe: "prato3",
      info: {
        descricao: "Massa e molho caseiros",
        preco: "R$ 19,90",       
      },
    },
  ];

  return (
    <>
      <p>Primeiro, seu prato</p>
      <ul class="lista-pratos">
        {listaPratos.map((item) => {
          return (
            <Item
              imagem={item.imagem}
              nomeItem={item.nomeItem}
              classe={item.classe}
              descricao={item.info.descricao}
              preco={item.info.preco}              
              todosItens={todosPratos}
              setTodosItens={setTodosPratos}
            />
          );
        })}
      </ul>
    </>
  );
}
