const CompletedTrade = require('../models').CompletedTrade

module.exports = {
    create(req, res) {
        return CompletedTrade
            .create({
                id: req.params.id,
                id: req.body.id
            })
            .then(completedtrade => res.status(201).send(completedtrade))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return CompletedTrade
            .findAll()
            .then(completedtrades => res.status(200).send(completedtrades))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return CompletedTrade
            .findByPk(req.params.id)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(404).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return res.status(200).send(completedtrade)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return CompletedTrade
            .findByPk(req.params.id)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(404).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return completedtrade
                    .update({
                        id: req.params.id || completedtrade.id,
                        id: req.body.id || completedtrade.id,
                        id: req.body.id || completedtrade.id
                    })
                    .then(() => res.status(200).send(completedtrade)) // Send back the updated completedtrade.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return CompletedTrade
            .findByPk(req.params.id)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(400).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return completedtrade
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'CompletedTrade deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}