export default function Sobremesa(props) {
  return (
    <>
      <li class="pratos sobremesa1">
        <img src={props.imagem} alt={props.sobremesa}/>
        <span>{props.sobremesa}</span>
        <div class="info">
          <span class="descrição">{props.descricao}</span>
          <span>{props.preco}</span>
          <ion-icon name="checkmark-circle" class="escondido"></ion-icon>
        </div>
      </li>
    </>
  );
}
