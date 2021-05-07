import Item from "./Item";
import React from "react";

export default function Pratos(props) {  
  const {todosPratos, setTodosPratos} = props;
  const listaPratos = [
    {
      id: 1,
      imagem: "/assets/img/strogonoff.jpg",
      nomeItem: "Strogonoff de Frango",
      classe: "prato1",
      info: {
        descricao: "Clássico, dispensa comentários",
        preco: "15,90",        
      },
    },
    {
      id: 2,
      imagem: "/assets/img/yinyang.png",
      nomeItem: "Ying Yang",
      classe: "prato2",
      info: {
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "14,90",        
      },
    },
    {
      id: 3,
      imagem: "/assets/img/lasanha.jpg",
      nomeItem: "Lasanha à bolonhesa",
      classe: "prato3",
      info: {
        descricao: "Massa e molho caseiros",
        preco: "19,90",       
      },
    },
  ];

  return (
    <>
      <p>Primeiro, seu prato</p>
      <ul className="lista-pratos">
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
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
}
