import {promises} from 'fs'

export async function getAll() {
    return promises.readFile('./data/testimonios.json')
        .then(function (data) {
            const testimonios = JSON.parse(data.toString())
            return testimonios
        })
        .catch(function (err) {
            return err            
        })
}

export default {
    getAll
}