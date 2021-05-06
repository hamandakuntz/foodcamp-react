import Item from "./Item";

export default function Sobremesas(props) {
  const {todasSobremesas, setTodasSobremesas} = props;
  const listaSobremesas = [
    {
      imagem: "/assets/img/pudim.jpg",
      nomeItem: "Pudim",
      classe: "sobremesa1",
      info: {
        descricao: "Apenas um delicioso pudim",
        preco: "R$ 7,90",        
      },
    },
    {
      imagem: "/assets/img/torta.jpg",
      nomeItem: "Torta de limão",
      classe: "sobremesa2",
      info: {
        descricao: "Uma fatia generosa o suficiente pra não enjoar",
        preco: "R$ 4,90",        
      },
    },
    {
      imagem: "/assets/img/bolo.jpg",
      nomeItem: "Bolo de laranja",
      classe: "sobremesa3",
      info: {
        descricao: "Melhor que o da Vó Alzira",
        preco: "R$ 10,90",        
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
            />
          );
        })}
      </ul>
    </>
  );
}
