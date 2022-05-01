import React, { Component, useEffect } from "react";
import { useState } from "react";

const Contador = () => {
    //let contador = 0;
    const [contador, setContador] = useState(0)
    const [status, setStatus] = useState("Par")

    useEffect(
        () => {
            if (contador % 2== 0) {
                setStatus("Par")
            } else {
                setStatus("Ímpar")
            }
        }
        ,
        [contador]
    )

    return (
        <div>
            <h2>Valor do contador: {contador}</h2>
            <h2>Par ou Ímpar?: {status}</h2>
            <button onClick={
                () => {
                    return setContador(contador+1)
                }
            }>Aumentar contador</button>
        </div>
    )
}

/*class Contador extends Component {
    constructor (props) {
        super(props)
        this.state = {contador:0}
    }
    render () {
        return (
            <div>
                <h2>Valor do contador: {this.state.contador}</h2>
                <button onClick={
                    () => {
                        this.setState({contador:this.state.contador+1})
                    }
                }>Aumentar contador</button>
            </div>
        )
    }
}*/

export default Contador