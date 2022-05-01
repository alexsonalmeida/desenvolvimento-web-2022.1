import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor() {
    const [professors, setProfessors] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3002/crud-express/professor/list")
            .then (
                (response) => {
                    /*console.log("Deu certo")
                    console.log(response.data)*/
                    setProfessors(response.data)
                }
            )
            .catch (
                (error) => console.log(error)
            )
        },
        []
    )

    function deleteProfessorById(_id) {
        let professorTemp = professors

        for(let i = 0; i < professorTemp.length; i++) {
            if (professorTemp[i]._id === _id) {
                //console.log("1")
                professorTemp.splice(i,1)
            }
        }

        setProfessors([...professorTemp]) //deve-se criar um outro array para disparar o re-render
        //setFlag(!flag)
    }

    function generateTable() {
        if (!professors) return
        return professors.map(
            (professor, i) => {
                return <ProfessorTableRow professor={professor} key={i} deleteProfessorById={deleteProfessorById}/>
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
                            <th colSpan={2} style={{ textAlign: "center" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListProfessor