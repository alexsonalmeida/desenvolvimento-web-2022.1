import React, { Component } from "react";

/*const MeusDadosProp = (props) => {
    return (
        <div>
            <h3>Nome: {this.props.nome}</h3>
        </div>
    )
}*/

class MeusDadosProps extends Component {
    render () {
        return (
            <h3>Nome: (this.Props.nome)</h3>
        )
    }
}

export default MeusDadosProps