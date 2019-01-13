const User = require('../models').User
const Auction = require('../models').Auction
const Trade = require('../models').Trade
const Bid = require('../models').Bid
const Offer = require('../models').Offer
const Message = require('../models').Message
const Recipient = require('../models').Recipient

module.exports = {
    create(req, res) {
        return User
            .create({
                id: req.body.id,
                email: req.body.email,
                password: req.body.password,
                fname: req.body.fname,
                lname: req.body.lname
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return User
            .findAll({
                include: [{
                        model: Auction,
                        as: 'selling'
                    },
                    {
                        model: Trade,
                        as: 'trading'
                    },
                    {
                        model: Bid,
                        as: 'bidding'
                    },
                    {
                        model: Offering,
                        as: 'offering'
                    },
                    {
                        model: Message,
                        as: 'sent'
                    },
                    {
                        model: Recipient,
                        as: 'inbox'
                    }
                ]
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return User
            .findById(req.params.id, {
                include: [{
                        model: Auction,
                        as: 'selling'
                    },
                    {
                        model: Trade,
                        as: 'trading'
                    }
                ]
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    })
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return User
            .findById(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    })
                }
                return user
                    .update({
                        id: req.params.id || user.id,
                        email: req.body.email || user.email,
                        password: req.body.password || user.password,
                        fname: req.body.fname || user.fname,
                        lname: req.body.lname || user.lname
                    })
                    .then(() => res.status(200).send(user)) // Send back the updated user.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return User
            .findById(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    })
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'User deleted successfully.'
                    }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}