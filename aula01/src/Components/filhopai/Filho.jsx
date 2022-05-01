import React from "react";

const Filho = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.notificarPai("Olá, papai", 100)
            }}>
                Enviar Mensagem pro meu pai
            </button>
        </div>
    )
}

export default Filho