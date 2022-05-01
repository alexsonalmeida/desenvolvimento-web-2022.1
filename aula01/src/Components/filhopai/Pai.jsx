import React from "react";
import Filho from "./Filho";

const Pai = () => {
    function mensagemRecebida(msg, grana) {
        //alert("Recebi mensagem do meu filho: " + msg + ", ele pediu emprestado: R$" + grana)
        alert(`Recebi mensagem do meu filho: ${msg}, ele pediu emprestado: R$${grana}`)
    }

    return (
        <div>
            <Filho notificarPai = {mensagemRecebida}/>
        </div>
    )
}

export default Pai