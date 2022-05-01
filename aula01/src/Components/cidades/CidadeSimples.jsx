import React from "react";

const CidadeSimples = () => {
    let forta = 0, qui = 0, lim = 0, cra = 0

    return (
        <div>
            <h3>Fortaleza: {forta}</h3>
            <h3>Quixadá: {qui}</h3>
            <h3>Limoeiro do Norte: {lim}</h3>
            <h3>Crato: {cra}</h3>

            <button onClick={() => forta++}>Votar em fortaleza</button>
            <button onClick={() => qui++}>Votar em quixadá</button>
            <button onClick={() => lim++}>Votar em limoeiro</button>
            <button onClick={() => cra++}>Votar em crato</button>
        </div>
    )
}

export default CidadeSimples