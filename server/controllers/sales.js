const Sale = require('../models').Sale

module.exports = {
    create(req, res) {
        return Sale
            .create({
                auction: req.params.auction,
                bid: req.body.bid,
                price: req.body.price
            })
            .then(sale => res.status(201).send(sale))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Sale
            .findAll()
            .then(sales => res.status(200).send(sales))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Sale
            .findByPk(req.params.id)
            .then(sale => {
                if (!sale) {
                    return res.status(404).send({
                        message: 'Sale Not Found',
                    })
                }
                return res.status(200).send(sale)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Sale
            .findByPk(req.params.id)
            .then(sale => {
                if (!sale) {
                    return res.status(404).send({
                        message: 'Sale Not Found',
                    })
                }
                return sale
                    .update({
                        id: req.params.id || sale.id,
                        auction: req.body.id || sale.auction,
                        bid: req.body.bidid || sale.bid,
                        price: req.body.price || sale.price
                    })
                    .then(() => res.status(200).send(sale)) // Send back the updated sale.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Sale
            .findByPk(req.params.id)
            .then(sale => {
                if (!sale) {
                    return res.status(400).send({
                        message: 'Sale Not Found',
                    })
                }
                return sale
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Sale deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}