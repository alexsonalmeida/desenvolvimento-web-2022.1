import { Component } from "react";
import React from "react";
import Personagem from "./Personagens";

class Casa extends Component {
    render () {
        return (
            <div>
                {
                    React.Children.map (
                        this.props.children,(personagem) => {
                            return React.cloneElement(personagem, {casa:this.props.casa})
                        }
                    )
                }
            </div>
        )
    }
}

/*const Casa = (props) =>
            <div>
                {
                    React.Children.map (
                        props.children,(personagem) => {
                            return React.cloneElement(personagem, {casa:props.casa})
                        }
                    )
                }
            </div>

    /*<div>
        {props.children} 
    </div>*/

export default Casa