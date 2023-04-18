const mock = require('../domain/mock.js')

exports.mock = () => {
	try {
		return mock
	} catch (error) {
		return warningHandler(error)
	}
}