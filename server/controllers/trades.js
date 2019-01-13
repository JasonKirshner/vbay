const Trade = require('../models').Trade
const Offer = require('../models').Offer

module.exports = {
    create(req, res) {
        console.log('here')
        return Trade
            .create({
                game: req.body.game,
                trader: req.params.trader,
                description: req.body.description,
                condition: req.body.condition,
                status: req.body.status
            })
            .then(trade => res.status(201).send(trade))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Trade
            .findAll({
                include: [{
                    model: Offer,
                    as: 'offers'
                }]
            })
            .then(trades => res.status(200).send(trades))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Trade
            .findById(req.params.id, {
                include: [{
                    model: Offer,
                    as: 'offers'
                }]
            })
            .then(trade => {
                if (!trade) {
                    return res.status(404).send({
                        message: 'Trade Not Found',
                    })
                }
                return res.status(200).send(trade)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Trade
            .findById(req.params.id)
            .then(trade => {
                if (!trade) {
                    return res.status(404).send({
                        message: 'Trade Not Found',
                    })
                }
                return trade
                    .update({
                        id: req.params.id || trade.id,
                        game: req.body.game || trade.game,
                        trader: req.body.trader || trade.trader,
                        description: req.body.description || trade.description,
                        condition: req.body.condition || trade.condition,
                        status: req.body.status || trade.status
                    })
                    .then(() => res.status(200).send(trade)) // Send back the updated trade.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Trade
            .findById(req.params.id)
            .then(trade => {
                if (!trade) {
                    return res.status(400).send({
                        message: 'Trade Not Found',
                    })
                }
                return trade
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Trade deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}