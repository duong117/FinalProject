var express = require('express')
var Sequelize = require('sequelize')

module.exports = function(Client) {
    var router = express.Router()

    router.get('/clients', function(req,res, next){
        Client.findAll( {order: ['name']}).then( clients => {
            return res.json(clients)
        }).catch(err => next(err))
    })

    router.post('/clients', function(req, res, next){
        Client.create(req.body).then( (data) => {
            return res.status(201).send('ok')
        }).catch( err => {
            if(err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })

    router.patch('/clients/:id', function(req, res, next){
        Client.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then( (rowsModified) => {
            if (!rowsModified[0]) {
                return res.status(404).send('Not found')
            } else {
                return res.send('ok')
            }
        }).catch( err => {
            if (err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })
    router.delete('/clients/:id', function(req, res, next){
        Client.destroy({ where: { id: req.params.id }})
            .then(rowsModified => {
                return res.send('ok')
            })
            .catch( err => next(err))
    })

    return router
}