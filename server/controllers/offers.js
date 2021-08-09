const Offer = require('../models').Offer

module.exports = {
    create(req, res) {
        return Offer
            .create({
                offerer: req.body.offerer,
                trade: req.params.trade,
                game: req.body.game,
                condition: req.body.condition
            })
            .then(offer => res.status(201).send(offer))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Offer
            .findAll()
            .then(offers => res.status(200).send(offers))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Offer
            .findByPk(req.params.id)
            .then(offer => {
                if (!offer) {
                    return res.status(404).send({
                        message: 'Offer Not Found',
                    })
                }
                return res.status(200).send(offer)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Offer
            .findByPk(req.params.id)
            .then(offer => {
                if (!offer) {
                    return res.status(404).send({
                        message: 'Offer Not Found',
                    })
                }
                return offer
                    .update({
                        id: req.params.id || offer.id,
                        offerer: req.body.id || offer.offerer,
                        trade: req.body.id || offer.trade,
                        game: req.body.id || offer.game,
                        condition: req.body.condition || offer.condition
                    })
                    .then(() => res.status(200).send(offer)) // Send back the updated offer.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Offer
            .findByPk(req.params.id)
            .then(offer => {
                if (!offer) {
                    return res.status(400).send({
                        message: 'Offer Not Found',
                    })
                }
                return offer
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Offer deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}