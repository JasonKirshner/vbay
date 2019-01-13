const DeletedMsg = require('../models').DeletedMsg

module.exports = {
	create(req, res) {
		return DeletedMsg.create({
			message: req.params.message,
			remover: req.body.remover,
			removed: req.body.removed
		}).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
	},
	list(req, res) {
		return DeletedMsg
			.findAll()
			.then(deletedmsgs => res.status(200).send(deletedmsgs))
			.catch(error => res.status(400).send(error))
	},
	retrieve(req, res) {
		return DeletedMsg
			.findById(req.params.id)
			.then(deletedmsg => {
				if (!deletedmsg) {
					return res.status(404).send({
						message: 'Deleted Message Not Found',
					})
				}
				return res.status(200).send(deletedmsg)
			})
			.catch(error => res.status(400).send(error))
	},
	update(req, res) {
		return DeletedMsg
			.findById(req.params.id)
			.then(deletedmsg => {
				if (!deletedmsg) {
					return res.status(404).send({
						message: 'Deleted Message Not Found',
					})
				}
				return deletedmsg
					.update({
						id: req.params.id || deletedmsg.id,
						message: req.body.message || deletedmsg.message,
						remover: req.body.remover || deletedmsg.remover,
						removed: req.body.removed || deletedmsg.removed
					})
					.then(() => res.status(200).send(deletedmsg)) // Send back the updated deletedmsg.
					.catch((error) => res.status(400).send(error))
			})
			.catch((error) => res.status(400).send(error))
	},
	destroy(req, res) {
		return DeletedMsg
			.findById(req.params.id)
			.then(deletedmsg => {
				if (!deletedmsg) {
					return res.status(400).send({
						message: 'Deleted Message Not Found',
					})
				}
				return deletedmsg
					.destroy()
					.then(() => res.status(200).send({
						message: 'Deleted Message deleted successfully.'
					}))
					.catch(error => res.status(400).send(error))
			})
			.catch(error => res.status(400).send(error))
	}
}