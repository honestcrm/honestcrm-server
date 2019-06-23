const database = require('../database-connection');

module.exports = {
  list() {
    return database('customers').select();
  },
  read(id) {
    return database('customers').select().where('id', id).first();
  },
  create(id) {
    return database('customers')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('customers')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('customers').delete().where('id', id);
  }
};