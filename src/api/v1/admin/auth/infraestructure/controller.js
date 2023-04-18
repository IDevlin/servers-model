const methods = require('./gateway.js')
const validate = require('../../../../../utils/api-validator.js')

exports.login = async (req, res) => {
    try {
       const response = await methods.login(req.body)
       return validate.getData(res, response) 
    } catch (error) {
        return console.log('auth/infrestructure/message:success: ', error)
    }
}

exports.register = async (req, res) => {
	try {
		const row = await methods.register(req.body)
		return validate.getData(res, row)
	} catch (error) {
		return warning(res, error.message, 500, error)
	}
}
