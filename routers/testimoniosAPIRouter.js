import express from 'express'
import { promises } from 'fs'

const router = express.Router()

router.route('/')
    .get(function (req, res) {
        promises.readFile('./data/testimonios.json')
            .then(function (data) {
                const testimonios = JSON.parse(data.toString())

                res.status(200).json(testimonios.filter(function (element) {
                    return element.deleted != true
                }))
            })
            .catch(function (err) {
                res.status(500)
                res.json({ err: 500, msg: err.message })
            })
    })
    .post(function (req, res) {
        promises.readFile('./data/testimonios.json')
            .then(function (data) {
                const testimonios = JSON.parse(data.toString())
                const tes = req.body
                tes.id = testimonios.length + 1

                testimonios.push(tes);

                promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                    .then(function () {
                        res.status(201).json(tes)
                    })
            })
            .catch(function (err) {
                res.status(500)
                res.json({ err: 500, msg: err.message })
            })
    })

router.route('/:id')
    .patch(function (req, res) {
        promises.readFile('./data/testimonios.json')
            .then(function (data) {

                const testimonios = JSON.parse(data.toString())
                const tes = testimonios.find(function (t) {
                    return t.id == req.params.id
                })

                if (tes) {
                    tes.public = true

                    promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                        .then(function () {
                            res.status(200).json(tes)
                        })
                }
                else {
                    res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
                }

            })
            .catch(function (err) {
                res.status(500)
                res.json({ err: 500, msg: err.message })
            })

    })
    .delete(function (req, res) {
        promises.readFile('./data/testimonios.json')
            .then(function (data) {

                const testimonios = JSON.parse(data.toString())
                const tes = testimonios.find(function (t) {
                    return t.id == req.params.id
                })

                if (tes) {
                    tes.deleted = true

                    promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios))
                        .then(function () {
                            res.status(200).json(tes)
                        })
                }
                else {
                    res.status(404).json({ err: 404, msg: `No se encuentra el testimonio #${req.params.id}` })
                }

            })
            .catch(function (err) {
                res.status(500)
                res.json({ err: 500, msg: err.message })
            })

    })

export default router