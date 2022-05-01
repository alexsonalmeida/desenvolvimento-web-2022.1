import React from "react"
const Questao01 = (props) => {
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso} </h3>
            <h3>Cidade: {props.cidade} </h3>
        </div>
    )
}

/*function Questao01() {
    return (
        <div>
            <h3>Nome: Francisco Alexson Almeida da Silva</h3>
            <h3>Curso: Engenharia de software</h3>
            <h3>Cidade: Baturité</h3>
        </div>
    )
}*/

export default Questao01