import express from 'express'
import controller from '../controllers/testimoniosController.js'

const router = express.Router()

router.get('/', controller.viewPublic)

// esto es solo new, por que el rooter principal esta puesto en /testimonios
router.get('/testimonio', controller.formNuevoTestimonio)
router.post('/testimonio', controller.crearTestimonio)

export default router