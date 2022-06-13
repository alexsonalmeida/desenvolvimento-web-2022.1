import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";

import ProfessorTableRow from "./ProfessorTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictedPage from "../../../utils/RestrictPage";

const ListProfessorPage = () => 
    <FirebaseContext.Consumer>
        {
            (firebase) => 
                    <RestrictedPage isLogged = {firebase.getUser() != null}>
                        <ListProfessor firebase = {firebase}/>
                    </RestrictedPage>
        }
    </FirebaseContext.Consumer>

function ListProfessor(props) {
    const [professors, setProfessors] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            /*
            axios.get("http://localhost:3002/crud-express/professor/list")
            .then (
                (response) => {
                    console.log("Deu certo")
                    console.log(response.data)
                    setProfessors(response.data)
                }
            )
            .catch (
                (error) => console.log(error)
            )*/
            setLoading(true)
            FirebaseProfessorService.list_onSnapshot(
                props.firebase.getFirestoreDb(), 
                (professors) => {
                    //console.log(professors)
                    setProfessors(professors)
                    setLoading(false)
                }
            )
        }
        ,
        [props]
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
        if (loading) {
            return (
                <tr>
                    <td colSpan={5}>
                        <div class="text-center">
                            <div class="spinner-border" role="status" style={{width:'3rem', height:'4rem'}}/>
                        </div>
                    </td>
                </tr>
            )
        }
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

export default ListProfessorPage