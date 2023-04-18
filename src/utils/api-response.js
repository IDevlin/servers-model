

function warningHandler(log) {
    const json = {};
    json.message = log.name + ': ' + log.message;
    json.stack = log.stack;
    json.code = 500;
    json.data = '';
    if (log.response !== undefined && log.response.data != '') {
      let data = log.response.data;
      if (typeof data != 'string') data = JSON.stringify(data);
      json.data = data;
      json.message = data;
    }
    return json;
  }

  module.exports = {
    warningHandler
  }