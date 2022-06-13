import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../components/services/FirebaseStudentService";
import RestrictedPage from "../../../utils/RestrictPage";
import ListStudent from "./ListStudent";


const CreateStudentPage = () => 
    <FirebaseContext.Consumer>
    {
        (firebase) => 
                <RestrictedPage isLogged = {firebase.getUser() != null}>
                    <CreateStudent firebase = {firebase}/>
                </RestrictedPage>
    }
    </FirebaseContext.Consumer>

function CreateStudent(props) {
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIRA] = useState(0)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const newStudent = { name, course, ira }
        /*
        //axios.post('http://localhost:3001/students', newStudent)
        axios.post('http://localhost:3002/crud-express/students/create', newStudent)
            .then(
                (res) => {
                    console.log(res.data._id)
                    alert(`Aluno ${name} criado com sucesso.`)
                    navigate("/listStudent")
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        */

        FirebaseStudentService.create( 
            props.firebase.getFirestoreDb(),
            () => {
                navigate("/listStudent")
            },
            newStudent)

        console.log(name)
        console.log(course)
        console.log(ira)
    }

    return (
        <>
            <main>
                <h2>
                    Criar Estudante
                </h2>
                <form autocomplete='off' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className="form-control"
                            value={(course == null || course === undefined) ? "" : course}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className="form-control"
                            value={(ira == null || ira === undefined) ? "" : ira}
                            name="ira"
                            onChange={(event) => { setIRA(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Criar Estudante" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CreateStudentPage
