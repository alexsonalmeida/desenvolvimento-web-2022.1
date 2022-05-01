import React, {useState} from "react";

const CreateProfessor = () => {
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [titularidade, setTitularidade] = useState("");

    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        alert(`Nome: ${name} \nuniversity: ${university}\ntitularidade: ${titularidade}`)
    }
    return(
        <div>
            <h2>Criar Professor</h2>
            {/* Formulario para criar um professor */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" 
                           className="form-control"
                        // Se o valor do input for nulo ou indefinido o nome é == "" se não ele 
                        // fica com o valor do input
                           value={(name==null || name===undefined ? "" : name)}
                           name="name"
                           onChange={(event)=>setName(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Universidade</label>
                    <input type="text" 
                           className="form-control"
                           value={(university==null || university===undefined ? "" : university)}
                           name="university"
                           onChange={(event)=>setUniversity(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Titularidade</label>
                    <input type="text" 
                           className="form-control"
                           value={(titularidade==null || titularidade===undefined ? 0 : titularidade)}
                           name="titularidade"
                           onChange={(event)=>setTitularidade(event.target.value)}
                           />
                </div>
                <div className="form-group" style={{paddingTop: 10}}>
                    <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateProfessor;