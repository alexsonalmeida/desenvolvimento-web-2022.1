import React, { Component } from "react";

class ImcClasse extends Component {

    calcularImc(altura, peso) {
        return peso / (altura*altura)
    }

    render () {
        const {altura, peso} = this.props

        return (
            <div>
                <h3>A minha altura é {altura} e o meu peso é {peso}</h3>
                <h3>O meu imc é: {this.calcularImc(altura, peso)}</h3>
            </div>
        )
    }
}

export default ImcClasse