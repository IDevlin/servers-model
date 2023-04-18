const useCases = require('../aplication/useCases')
 const repository = require('../../users/infraestructure/database.js')

exports.login = (payload)=> {
    //console.log('payload ',payload)
 try {
    return useCases.login(repository, payload)
 } catch (error) {
    
 }
}

exports.register = async payload => {
   try {
     return useCases.register(payload, repository);
   } catch (error) {
     return warningHandler(error);
   }
 };

