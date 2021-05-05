export default function Bebida(props) {
  return (
    <>
      <li class={`itens ${props.classe}`}>
        <img src={props.imagem} alt={props.bebida}/>
        <span>{props.bebida}</span>
        <div class="info">
          <span class="descrição">{props.descricao}</span>
          <span>{props.preco}</span>
          <ion-icon name="checkmark-circle" class="escondido"></ion-icon>
        </div>
      </li>
    </>
  );
}
