import Item from "./Item";

export default function Sobremesas(props) {
  const {todasSobremesas, setTodasSobremesas} = props;
  const listaSobremesas = [
    {
      id: 1,
      imagem: "/assets/img/pudim.jpg",
      nomeItem: "Pudim",
      classe: "sobremesa1",
      info: {
        descricao: "Apenas um delicioso pudim",
        preco: "7,90",        
      },
    },
    {
      id: 2,
      imagem: "/assets/img/torta.jpg",
      nomeItem: "Torta de limão",
      classe: "sobremesa2",
      info: {
        descricao: "Uma fatia generosa o suficiente pra não enjoar",
        preco: "4,90",        
      },
    },
    {
      id: 3,
      imagem: "/assets/img/bolo.jpg",
      nomeItem: "Bolo de laranja",
      classe: "sobremesa3",
      info: {
        descricao: "Melhor que o da Vó Alzira",
        preco: "10,90",        
      },
    },
  ];

  return (
    <>
      <p>Por fim, sua sobremesa</p>
      <ul class="lista-sobremesas">
        {listaSobremesas.map((item) => {
          return (
            <Item
              imagem={item.imagem}
              nomeItem={item.nomeItem}
              classe={item.classe}
              descricao={item.info.descricao}
              preco={item.info.preco}
              contador={item.info.contador}
              todosItens={todasSobremesas}
              setTodosItens={setTodasSobremesas}
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
}
