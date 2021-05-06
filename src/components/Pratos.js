import Prato from "./Prato";
import React from "react";

export default function Pratos() {  
  const listaPratos = [
    {
      imagem: "/assets/img/strogonoff.jpg",
      prato: "Strogonoff de Frango",
      classe: "prato1",
      info: {
        descricao: "Clássico, dispensa comentários",
        preco: "R$15,90",        
      },
    },
    {
      imagem: "/assets/img/yinyang.png",
      prato: "Ying Yang",
      classe: "prato2",
      info: {
        descricao: "Um pouco de batata, um pouco de salada",
        preco: "R$ 14,90",        
      },
    },
    {
      imagem: "/assets/img/lasanha.jpg",
      prato: "Lasanha à bolonhesa",
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
            <Prato
              imagem={item.imagem}
              prato={item.prato}
              classe={item.classe}
              descricao={item.info.descricao}
              preco={item.info.preco}
              contador={item.info.contador}
            />
          );
        })}
      </ul>
    </>
  );
}
