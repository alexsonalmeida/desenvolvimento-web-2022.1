import React from "react";

const Imc = (props) => {

    function calcularImc(altura, peso) {
        return peso/(altura*altura)
    }

    function estadoPeso(imc) {
        let msg = ""

        if (imc < 17) {
            msg = "muito abaixo do peso"
        } else if (imc < 18.5) {
            msg = "abaixo do peso"
        } else if (imc >= 25) {
            msg = "acima do peso"
        } else {
            msg = "com o peso dentro da media"
        }

        return msg
    }

    const imc = calcularImc(props.altura, props.peso)

    return (
        <div>
            <h3>A minha altura é {props.altura} e o meu peso é {props.peso}</h3>
            <h3>O meu imc é {imc.toFixed(2)}</h3>
            <h3>Eu estou {estadoPeso(imc)}</h3>
        </div>
    )
}

export default Imc
