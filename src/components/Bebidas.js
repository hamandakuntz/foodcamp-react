import Bebida from "./Bebida";

export default function Bebidas() {
  const listaBebidas = [
    {
      imagem: "/assets/img/coca.jpg",
      bebida: "Pouquíssima coca",
      classe: "item1",
      info: {
        descricao: "Lata 350ml, acaba em dois goles",
        preco: "R$ 4,90",
      },
    },
    {
      imagem: "/assets/img/coca2.jpg",
      bebida: "Pouca coca",
      classe: "item2",
      info: {
        descricao: "600ml, acaba antes do prato",
        preco: "R$ 8,90",
      },
    },
    {
      imagem: "/assets/img/coca3.jpg",
      bebida: "Coca suficiente",
      classe: "item3",
      info: {
        descricao: "2l, essa dá e ainda sobra um chorinho",
        preco: "R$ 11,90",
      },
    },
  ];

  return (
    <>
      <p>Agora, sua coca</p>
      <ul class="lista-bebidas">
        {listaBebidas.map((item) => {
          return (
            <Bebida
              imagem={item.imagem}
              bebida={item.bebida}
              classe={item.classe}
              descricao={item.info.descricao}
              preco={item.info.preco}
            />
          );
        })}
      </ul>
    </>
  );
}
