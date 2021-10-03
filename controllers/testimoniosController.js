import { promises } from 'fs'
import repository from '../repositories/testimoniosRepository.js'

function viewPublic(req, res) {
    repository.getAll()
        .then(function (testimonios) {
            res.render('list-testimonios', {
                list: testimonios
            })
        })
        .catch(function (err) {
            res.status(500).json({ err: 500, msg: err.message })
        })
}

export function formNuevoTestimonio(req, res) {
    res.render("formNuevoTestimonio", {})
}

export function crearTestimonio(req, res) {
    promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data.toString())
            const tes = req.body
            tes.id = testimonios.length + 1

            testimonios.push(tes);

            promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                .then(function () {
                    res.render("testimonio", tes)
                })
        })
        .catch(function (err) {
            res.status(500)
            res.json({ err: 500, msg: err.message })
        })


}


export default {
    viewPublic,
    formNuevoTestimonio,
    crearTestimonio
}