import React, { Component } from "react";

class Questao02 extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {nome, curso, cidade} = this.props
        return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Curso: {curso} </h3>
            <h3>Cidade: {cidade} </h3>
        </div>
        )
    }
}

export default Questao02
