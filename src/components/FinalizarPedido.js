export default function FinalizarPedido(props) {  
  return (
    <div class="base">
      <button class="selecionar-pedido" disabled={props.todos}>
        Selecione os 3 itens para fechar o pedido
      </button>
    </div>
  );    
}
