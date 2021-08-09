const Message = require('../models').Message
const Recipient = require('../models').Recipient

module.exports = {
	create(req, res) {
		return Message.create({
			parent: req.body.parent,
			sender: req.params.sender,
			recipient: req.body.recipient,
			subject: req.body.subject,
			body: req.body.body
		}).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
	},
	list(req, res) {
		return Message
			.findAll({
				include: [{
					model: Recipient,
					as: 'recipient'
				}]
			})
			.then(messages => res.status(200).send(messages))
			.catch(error => res.status(400).send(error))
	},
	retrieve(req, res) {
		return Message
			.findByPk(req.params.id, {
				include: [{
					model: Recipient,
					as: 'recipient'
				}]
			})
			.then(message => {
				if (!message) {
					return res.status(404).send({
						message: 'Message Not Found',
					})
				}
				return res.status(200).send(message)
			})
			.catch(error => res.status(400).send(error))
	},
	update(req, res) {
		return Message
			.findByPk(req.params.id)
			.then(message => {
				if (!message) {
					return res.status(404).send({
						message: 'Message Not Found',
					})
				}
				return message
					.update({
						id: req.params.id || message.id,
						sender: req.body.sender || message.sender,
						parent: req.body.parent || message.parent,
						recipient: req.body.recipient || message.recipient,
						subject: req.body.subject || message.subject,
						body: req.body.body || message.body
					})
					.then(() => res.status(200).send(message)) // Send back the updated message.
					.catch((error) => res.status(400).send(error))
			})
			.catch((error) => res.status(400).send(error))
	},
	destroy(req, res) {
		return Message
			.findByPk(req.params.id)
			.then(message => {
				if (!message) {
					return res.status(400).send({
						message: 'Message Not Found',
					})
				}
				return message
					.destroy()
					.then(() => res.status(200).send({
						message: 'Message deleted successfully.'
					}))
					.catch(error => res.status(400).send(error))
			})
			.catch(error => res.status(400).send(error))
	}
}