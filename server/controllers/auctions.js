const Auction = require('../models').Auction
const Bid = require('../models').Bid

module.exports = {
    create(req, res) {
        return Auction.create({
            auctioneer: req.params.auctioneer,
            game: req.body.game,
            description: req.body.description,
            status: req.body.status,
            startprice: req.body.startprice
        }).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return Auction
            .findAll({
                include: [{
                    model: Bid,
                    as: 'bids'
                }]
            })
            .then(auctions => res.status(200).send(auctions))
            .catch(error => res.status(400).send(error))
    },
    retrieve(req, res) {
        return Auction
            .findByPk(req.params.id, {
                include: [{
                    model: Bid,
                    as: 'bids'
                }]
            })
            .then(auction => {
                if (!auction) {
                    return res.status(404).send({
                        message: 'Auction Not Found',
                    })
                }
                return res.status(200).send(auction)
            })
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return Auction
            .findByPk(req.params.id)
            .then(auction => {
                if (!auction) {
                    return res.status(404).send({
                        message: 'Auction Not Found',
                    })
                }
                return auction
                    .update({
                        id: req.params.id || auction.id,
                        auctioneer: req.body.auctioneer || auction.auctioneer,
                        game: req.body.game || auction.game,
                        description: req.body.description || auction.description,
                        status: req.body.status || auction.status,
                        startprice: req.body.startprice || auction.startprice
                    })
                    .then(() => res.status(200).send(auction)) // Send back the updated auction.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
    destroy(req, res) {
        return Auction
            .findByPk(req.params.id)
            .then(auction => {
                if (!auction) {
                    return res.status(400).send({
                        message: 'Auction Not Found',
                    })
                }
                return auction
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Auction deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}