import Item from "./Item";

export default function Bebidas(props) {
  const {todasBebidas, setTodasBebidas} = props;

  const listaBebidas = [
    {
      id: 1,
      imagem: "/assets/img/coca.jpg",
      nomeItem: "Pouquíssima coca",
      classe: "item1",
      info: {
        descricao: "Lata 350ml, acaba em dois goles",
        preco: "4,90",        
      },
    },
    {
      id: 2,
      imagem: "/assets/img/coca2.jpg",
      nomeItem: "Pouca coca",
      classe: "item2",
      info: {
        descricao: "600ml, acaba antes do prato",
        preco: "8,90",        
      },
    },
    {
      id: 3,
      imagem: "/assets/img/coca3.jpg",
      nomeItem: "Coca suficiente",
      classe: "item3",
      info: {
        descricao: "2l, essa dá e ainda sobra um chorinho",
        preco: "11,90",        
      },
    },
  ];

  return (
    <>
      <p>Agora, sua coca</p>
      <ul className="lista-bebidas">
        {listaBebidas.map((item) => {
          return (
            <Item
              imagem={item.imagem}
              nomeItem={item.nomeItem}
              classe={item.classe}
              descricao={item.info.descricao}
              preco={item.info.preco}             
              todosItens={todasBebidas}
              setTodosItens={setTodasBebidas}
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
}
