const database = require("./../database");
const { warningHandler } = require("./api-response");
const dbInstance = () => database.getDbInstance();
const db = dbInstance();

exports.db = db;

exports.raw = async (sql) => {
  try {
    const db = dbInstance();
    //console.log(db);
    return db.raw(sql);
  } catch (error) {
    console.log(error);
  }
};

exports.all = async (mock) => {
  try {
    const db = dbInstance();
    return db.from(mock.table).select(mock.colums);
  } catch (error) {
    console.log(error);
  }
};

exports.getBy = async (mock, column, value, all = false) => {
  try {
    const db = dbInstance();
    return all
      ? await db(mock.table).select(mock.columns).where(column, value)
      : await db(mock.table)
          .select(mock.columns)
          .where(column, value)
          .orderBy([{ column: "id", order: "desc" }]);
  } catch (error) {
    console.log('api-database getBy', error)
  }
};

exports.save = async (mock, data) => {
  try {
    const db = dbInstance();
    return await db(mock.table).insert(data)
  } catch (error) {
    return warningHandler(error)
  }
}
