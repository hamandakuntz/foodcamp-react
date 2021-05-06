import Sobremesa from "./Sobremesa";

export default function Sobremesas() {
  const listaSobremesas = [
    {
      imagem: "/assets/img/pudim.jpg",
      sobremesa: "Pudim",
      classe: "sobremesa1",
      info: {
        descricao: "Apenas um delicioso pudim",
        preco: "R$ 7,90",
        contador: 0,
      },
    },
    {
      imagem: "/assets/img/torta.jpg",
      sobremesa: "Torta de limão",
      classe: "sobremesa2",
      info: {
        descricao: "Uma fatia generosa o suficiente pra não enjoar",
        preco: "R$ 4,90",
        contador: 0,
      },
    },
    {
      imagem: "/assets/img/bolo.jpg",
      sobremesa: "Bolo de laranja",
      classe: "sobremesa3",
      info: {
        descricao: "Melhor que o da Vó Alzira",
        preco: "R$ 10,90",
        contador: 0,
      },
    },
  ];

  return (
    <>
      <p>Por fim, sua sobremesa</p>
      <ul class="lista-sobremesas">
        {listaSobremesas.map((item) => {
          return (
            <Sobremesa
              imagem={item.imagem}
              sobremesa={item.sobremesa}
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
