const auctionsController = require('../controllers').auctions
const bidsController = require('../controllers').bids
const completedtradesController = require('../controllers').completedtrades
const deletedmsgsController = require('../controllers').deletedmsgs
const gamesController = require('../controllers').games
const messagesController = require('../controllers').messages
const offersController = require('../controllers').offers
const recipientsController = require('../controllers').recipients
const salesController = require('../controllers').sales
const tradesController = require('../controllers').trades
const usersController = require('../controllers').users

/*const igdb = require('igdb-api-node').default
const client = igdb('YOUR_API_KEY')*/

module.exports = (app) => {
    app.get('/vbay-api', (req, res) => res.status(200).send({
        message: 'You have successfully connected to the vbay API',
    }))

    /**** CREATE ****/
    // Auctions
    app.post('/vbay-api/users/:id/auctions', auctionsController.create)

    // Bids
    app.post('/vbay-api/auctions/:id/bids', bidsController.create)

    // CompletedTrades
    app.post('/vbay-api/trades/:id/completedtrades', completedtradesController.create)

    // DeletedMsgs
    app.post('/vbay-api/messages/:id/deletedmsgs', deletedmsgsController.create)

    // Games
    app.post('/vbay-api/games', gamesController.create)

    // Messages
    app.post('/vbay-api/users/:id/messages', messagesController.create)

    // Offers
    app.post('/vbay-api/trades/:id/offers', offersController.create)

    // Recipients
    app.post('/vbay-api/users/:id/recipients', recipientsController.create)

    // Sales
    app.post('/vbay-api/auctions/:id/sales', salesController.create)

    // Trades
    app.post('/vbay-api/users/:id/trades', tradesController.create)

    // Users
    app.post('/vbay-api/users', usersController.create)
    /**** END CREATE ****/

    /**** READ ****/
    // Auctions
    app.get('/vbay-api/auctions', auctionsController.list)
    app.get('/vbay-api/auctions/:id', auctionsController.retrieve)

    // Bids
    app.get('/vbay-api/bids', bidsController.list)
    app.get('/vbay-api/bids/:bidid', bidsController.retrieve)

    // CompletedTrades
    app.get('/vbay-api/completedtrades', completedtradesController.list)
    app.get('/vbay-api/completedtrades/:id', completedtradesController.retrieve)

    // DeletedMsgs
    app.get('/vbay-api/deletedmsgs', deletedmsgsController.list)
    app.get('/vbay-api/deletedmsgs/:id', deletedmsgsController.retrieve)

    // Games
    app.get('/vbay-api/games', gamesController.list)
    app.get('/vbay-api/games/:id', gamesController.retrieve)

    // Messages
    app.get('/vbay-api/messages', messagesController.list)
    app.get('/vbay-api/messages/:id', messagesController.retrieve)

    // Offers
    app.get('/vbay-api/offers', offersController.list)
    app.get('/vbay-api/offers/:id', offersController.retrieve)

    // Recipients
    app.get('/vbay-api/recipients', recipientsController.list)
    app.get('/vbay-api/recipients/:id', recipientsController.retrieve)

    // Sales
    app.get('/vbay-api/sales', salesController.list)
    app.get('/vbay-api/sales/:id', salesController.retrieve)

    // Trades
    app.get('/vbay-api/trades', tradesController.list)
    app.get('/vbay-api/trades/:id', tradesController.retrieve)

    // Users
    app.get('/vbay-api/users', usersController.list)
    app.get('/vbay-api/users/:id', usersController.retrieve)
    /**** END READ ****/

    /* 
    // IGDB
    app.get('/vbay-api/igdb/:igdbid', (req, res) => {
        client.games({ id: req.params.igdbid }, {}).then(res => {
            res.body
        }).catch(error => {
            throw error
        })
        res.status(200).send()
    })*/

    /**** UPDATE ****/
    // Auctions
    app.put('/vbay-api/auctions/:id', auctionsController.update)

    // Bids
    app.put('/vbay_api/bids/:bidid', bidsController.update)

    // CompletedTrades
    app.put('/vbay_api/completedtrades/:id', completedtradesController.update)

    // DeletedMsgs
    app.put('/vbay_api/deletedmsgs/:id', deletedmsgsController.update)

    // Games
    app.put('/vbay-api/games/:id', gamesController.update)

    // Messages
    app.put('/vbay-api/messages/:id', messagesController.update)

    // Offers
    app.put('/vbay_api/offers/:id', offersController.update)

    // Recipients
    app.put('/vbay-api/recipients/:id', recipientsController.update)

    // Sales
    app.put('/vbay_api/sales/:id', salesController.update)

    // Trades
    app.put('/vbay_api/trades/:id', tradesController.update)

    // Users
    app.put('/vbay-api/users/:id', usersController.update)
    /**** END UPDATE ****/

    /**** DELETE ****/
    // Auctions
    app.delete('/vbay-api/auctions/:id', auctionsController.destroy)

    // Bids
    app.delete('/vbay-api/bids/:bidid', bidsController.destroy)

    // CompletedTrades
    app.delete('/vbay-api/completedtrades/:id', completedtradesController.destroy)

    // DeletedMsgs
    app.delete('/vbay-api/deletedmsgs/:id', deletedmsgsController.destroy)

    // Games
    app.delete('/vbay-api/games/:id', gamesController.destroy)

    // Messages
    app.delete('/vbay-api/messages/:id', messagesController.destroy)

    // Offers
    app.delete('/vbay-api/offers/:id', offersController.destroy)

    // Recipients
    app.delete('/vbay-api/recipients/:id', recipientsController.destroy)

    // Sales
    app.delete('/vbay-api/sales/:id', salesController.destroy)

    // Trades
    app.delete('/vbay-api/trades/:id', tradesController.destroy)

    // Users
    app.delete('/vbay-api/users/:id', usersController.destroy)
    /**** END DELETE ****/
}