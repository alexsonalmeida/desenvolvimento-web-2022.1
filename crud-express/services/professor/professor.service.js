const ProfessorModel = require("../../models/professors/professor.model")

class ProfessorService {
    //retorna o professor deletado
    static delete(req, res) {
        ProfessorModel.findByIdAndRemove(req.params.id).then(
            (professor) => {
                res.status(200).json(professor);
            }
        );
    }

    //retorna um professor atualizado
    static update(req, res) {
        ProfessorModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (professor) => {
                res.status(200).json(professor);
            }
        );
    }

    //retorna um objeto que representa um User
    static create(req, res) {
        ProfessorModel.create(req.body).then(
            (professor) => {
                res.status(201).json(professor);
            }
        );
    }

    //retorna um user
    static retrieve(req, res) {
        ProfessorModel.findById(req.params.id).then(
            (professor) => {
                res.status(200).json(professor);
            }
        );
    }

    //retorna um vetor de users
    static list(req, res) {
        ProfessorModel.find().then(
            (professors) => {
                res.status(200).json(professors);
            }
        );
    }
}

module.exports = ProfessorService