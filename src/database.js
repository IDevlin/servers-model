
const Knex = require('knex');
const config = require('./config/index.js');
let engine = null;

const DEFAULT= {
connection: config.dbConnection,
  attach: 'onPreHandler',
  detach: 'tail',
  searchPath: 'public',
  pool: {
    destroy: client => client.end(),
    max: 180,
    min: 2,
    idleTimeoutMillis: 30000,
    log: true,
  },
  debug: false,
  acquireConnectionTimeout: 10000,
}

const createInstanceDb = () => {
    engine = Knex({
      client: 'mysql',
      ...DEFAULT,
    });
  };

  const getDbInstance = () => {
    if (!engine) createInstanceDb();
    return engine;
  };
  
  module.exports = {
    getDbInstance,
  };