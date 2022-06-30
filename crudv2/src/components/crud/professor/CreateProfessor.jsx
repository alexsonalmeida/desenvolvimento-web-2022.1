import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../../utils/RestrictPage";

const CreateProfessorPage = ({setShowToast, setToast}) =>
<FirebaseContext.Consumer>
    {
        (firebase) => {
            return (
                <RestrictPage isLogged={firebase.getUser()!=null}
                isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}>
                    <CreateProfessor 
                        firebase={firebase}
                        setShowToast={setShowToast}
                        setToast={setToast}/>
                </RestrictPage>
            )
        }
    }
</FirebaseContext.Consumer>

function CreateProfessor(props) {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const [validate,setValidate] = useState({name:'',university:'',degree:''})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const validateFields = () => {
        let res = true
        setValidate({name:'',university:'',degree:''})

        if(name === '' || university === '' || degree === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',university:'',degree:''}
            if(name === '') validateObj.name = 'is-invalid'
            if(university === '') validateObj.university = 'is-invalid'
            if(degree === '') validateObj.degree = 'is-invalid'
            console.log(university)
            setValidate(validateObj)
        }
               
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const newProfessor = { name, university, degree }

       FirebaseProfessorService.create(
           props.firebase.getFirestoreDb(),
           () => {
            props.setToast({header:'Sucesso!',body:`Professor ${name} criado com sucesso.`})
            props.setShowToast(true)
            setLoading(false)
            navigate("/listProfessor")
           },
           newProfessor
       )
    }

    const renderSubmitButton = () => {
        if (loading) {
            return (
                <div style={{ paddingTop: 20 }}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span style={{ marginLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        }
        return (
            <>
                <div className="form-group" style={{ paddingTop: 20 }}>
                    <input type="submit" value="Efetuar Cadastro" className="btn btn-primary" />
                </div>
            </>
        )
    }

    return (
        <>
            <main>
                <h2>
                    Criar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome* </label>
                        <input type="text"
                            className={`form-control ${validate.name}`}
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>University* </label>
                        <input type="text"
                            className={`form-control ${validate.university}`}
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Degree* </label>
                        <input type="text"
                            className={`form-control ${validate.degree}`}
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CreateProfessorPage