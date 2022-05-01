import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import CreateStudent from './components/crud/students/CreateStudent';
import ListStudent from './components/crud/students/ListStudent';
import EditStudent from './components/crud/students/EditStudent';
import CreateProfessor from './components/crud/professor/CreateProfessor';
import ListProfessor from './components/crud/professor/ListProfessor';
import EditProfessor from './components/crud/professor/EditProfessor';
import { NavDropdown } from 'react-bootstrap';

const App = () => {
    return(
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>UFC</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navitem"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navitem"><Link to="about" className="nav-link">Sobre</Link></li>
                        <li className='navitem' id="navbarNavDarkDropdown">
                            <NavDropdown id="nav-dropdown-dark" title="Estudantes" menuVariant="dark">
                                <NavDropdown.Item>
                                    <Link to="CreateStudent" className='nav-link'>Create Student</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="ListStudent" className='nav-link'>List Student</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className='navitem' id="navbarNavDarkDropdown">
                            <NavDropdown id="nav-dropdown-dark" title="Professores" menuVariant="dark">
                                <NavDropdown.Item>
                                    <Link to="createProfessor" className='nav-link'>Create Professor</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="listProfessor" className='nav-link'>List Professor</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="createStudent" element={<CreateStudent/>} />
                <Route path="listStudent" element={<ListStudent/>} />
                <Route path="editStudent/:id" element={<EditStudent/>} />
                <Route path="createProfessor" element={<CreateProfessor/>} />
                <Route path="listProfessor" element={<ListProfessor/>} />
                <Route path="editProfessor/:id" element={<EditProfessor/>} />
            </Routes>
      </div>
    )
}
export default App;
