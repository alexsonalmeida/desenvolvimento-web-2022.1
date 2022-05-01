import { Component } from "react";

class Hero extends Component {
    render () {
        const {name, arena, img} = this.props
        
        if (img == null) {
            return (
                <div>
                    <h2>Heroi {name} lutando na arena {arena}</h2>
                </div>
            ) 
        } else {
            return (
                <div>
                    <h2>Heroi {name} lutando na arena {arena}</h2>
                    <img src={img} />
                </div>
            )            
        }
    }
}

export default Hero