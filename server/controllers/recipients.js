const Recipient = require('../models').Recipient

module.exports = {
	create(req, res) {
		return Recipient.create({
			user: req.params.user,
			message: req.body.message,
			isread: req.body.isread
		}).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
	},
	list(req, res) {
		return Recipient
			.findAll()
			.then(recipients => res.status(200).send(recipients))
			.catch(error => res.status(400).send(error))
	},
	retrieve(req, res) {
		return Recipient
			.findByPk(req.params.id)
			.then(recipient => {
				if (!recipient) {
					return res.status(404).send({
						message: 'Recipient Not Found',
					})
				}
				return res.status(200).send(recipient)
			})
			.catch(error => res.status(400).send(error))
	},
	update(req, res) {
		return Recipient
			.findByPk(req.params.id)
			.then(recipient => {
				if (!recipient) {
					return res.status(404).send({
						message: 'Recipient Not Found',
					})
				}
				return recipient
					.update({
						id: req.params.id || recipient.id,
						user: req.body.user || recipient.user,
						message: req.body.message || recipient.message,
						isread: req.body.isread || recipient.isread,
					})
					.then(() => res.status(200).send(recipient)) // Send back the updated recipient.
					.catch((error) => res.status(400).send(error))
			})
			.catch((error) => res.status(400).send(error))
	},
	destroy(req, res) {
		return Recipient
			.findByPk(req.params.id)
			.then(recipient => {
				if (!recipient) {
					return res.status(400).send({
						message: 'Recipient Not Found',
					})
				}
				return recipient
					.destroy()
					.then(() => res.status(200).send({
						message: 'Recipient deleted successfully.'
					}))
					.catch(error => res.status(400).send(error))
			})
			.catch(error => res.status(400).send(error))
	}
}