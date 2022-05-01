import { Component} from "react";

class CidadeComClasse extends Component {

    constructor (props) {
        super(props)
        this.state = {forta:0, qui:0, lim:0, cra:0}
    }
    /*
    votarForta() {
        this.setState({forta:this.state.forta+1})
    }*/

    votarQui() {
        this.setState({qui:this.state.qui+1})
    }

    votarLim() {
        this.setState({lim:this.state.lim+1})
    }

    votarCra() {
        this.setState({cra:this.state.cra+1})
    }

    render() {
        //var forta = 0, qui = 0, lim = 0, cra = 0

        return (
            <div>
                <h3>Fortaleza: {this.state.forta}</h3>
                <h3>Quixadá: {this.state.qui}</h3>
                <h3>Limoeiro do Norte: {this.state.lim}</h3>
                <h3>Crato: {this.state.cra}</h3>
    
                <button onClick={() => this.setState({forta:this.state.forta+1})}>Votar em fortaleza</button>
                <button onClick={() => this.votarQui()}>Votar em quixadá</button>
                <button onClick={() => this.votarLim()}>Votar em limoeiro</button>
                <button onClick={() => this.votarCra()}>Votar em crato</button>
            </div>
        )
    }
}

export default CidadeComClasse