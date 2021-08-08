const auctions = require('./auctions')
const bids = require('./bids')
const completedtrades = require('./completedtrades')
const deletedmsgs = require('./deletedmsgs')
const games = require('./games')
const messages = require('./messages')
const offers = require('./offers')
const sales = require('./sales')
const trades = require('./trades')
const users = require('./users')
const recipients = require('./recipients')

module.exports = {
    auctions,
    bids,
    completedtrades,
    deletedmsgs,
    games,
    messages,
    recipients,
    offers,
    sales,
    trades,
    users
}