import React from "react";
import {useParams, Link} from "react-router-dom";

const Pagina2 = () => {
    let params = useParams();
    return (
        <div>
            Página page 2
            <h3>Nome: {params.nome}</h3>
            <h3>ID: {params.id}</h3>
            <Link to="/">Voltar para home</Link>
        </div>
    )
}

export default Pagina2