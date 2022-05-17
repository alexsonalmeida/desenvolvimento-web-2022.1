const StudentModel = require("../../models/students/student.model")

class StudentService {
    //retorna o student deletado
    static delete(req, res) {
        StudentModel.findByIdAndRemove(req.params.id).then(
            (student) => {
                res.status(200).json(student);
            }
        );
    }

    //retorna um student atualizado
    static update(req, res) {
        StudentModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (student) => {
                res.status(200).json(student);
            }
        );
    }

    //retorna um objeto que representa um User
    static create(req, res) {
        StudentModel.create(req.body).then(
            (student) => {
                res.status(201).json(student);
            }
        );
    }

    //retorna um user
    static retrieve(req, res) {
        StudentModel.findById(req.params.id).then(
            (student) => {
                res.status(200).json(student);
            }
        );
    }

    //retorna um vetor de users
    static list(req, res) {
        StudentModel.find().then(
            (students) => {
                res.status(200).json(students);
            }
        );
    }
}

module.exports = StudentService