const useCasesUsers = require('../../users/aplication/useCases.js');
const jwt = require('jsonwebtoken');
const bcryptjs =  require('bcryptjs');
const { warningHandler } = require('../../../../../utils/api-response.js');

exports.login = async (repository, {email, password})=> {
    try {
       const user = await repository.getBy(useCasesUsers.mock(), 'email', email); 
       if (!user) {
        return res(200, 'notExistEmail');
      }
      const passOk = await bcryptjs.compare(password, user.password);
      if(!passOk){
        return res(200, 'password not match');
      }
      // Si todo ok crear y firmar JWT
      const payload = {user}
      // Firmar token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 14400, }); // 4 horas
      return {token, user}
    } catch (error) {
        return warningHandler(error)
    }   
};

exports.register = async (data, repository) => {
    try {
      const user = await repository.getBy(
        useCasesUsers.mock(),
        'email',
        data.email,
      );
      if (user) {
        return res(403, 'existEmail');
      }
  
      // hashear contraseña
      const salt = await bcryptjs.genSalt(10);
      data.password = await bcryptjs.hash(data.password, salt);
      data.registered_at = DateTime.now().toFormat('MM-DD-yyyy H:I');
      data.last_login = DateTime.now().toFormat('MM-DD-yyyy H:I');
  
      // Si todo ok crear y firmar JWT
      const payload = { user: user };
      // Firmar token
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 14400, // 4 horas
      });
  
      data.token = token;
  
      return await repository.save(useCasesUsers.mock(), data);
    } catch (error) {
      return console.log('error register-auth-useCases', error)//warningHandler(error);
    }
  };
