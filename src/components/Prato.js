export default function Prato(props) {
  return (
    <>
      <li class={`pratos ${props.classe}`}>
        <img src={props.imagem} alt={props.prato} />
        <span>{props.prato}</span>
        <div class="info">
          <span class="descrição">{props.descricao}</span>
          <span>{props.preco}</span>
          <ion-icon name="checkmark-circle" class="escondido"></ion-icon>
        </div>
      </li>
    </>
  );
}
