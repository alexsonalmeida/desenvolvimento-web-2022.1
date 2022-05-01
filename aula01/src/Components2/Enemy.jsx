import { Component } from "react";

class Enemy extends Component {
    render () {
        const {name, arena} = this.props

        return (
            <div>
                <h2>Inimigo {name} lutando na arena {arena} </h2>
            </div>
        )
    }
}

export default Enemy