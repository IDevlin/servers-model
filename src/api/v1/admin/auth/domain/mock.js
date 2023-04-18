const lang = require('./')

exports.res = async (code, message) => {
    return {
      code: code,
      message: lang.messages[message],
      token: null,
    };
  };
  