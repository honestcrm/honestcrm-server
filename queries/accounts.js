const database = require('../database-connection');

module.exports = {
  list() {
    return database('accounts').select();
  },
  read(id) {
    return database('accounts').select().where('id', id).first();
  },
  create(id) {
    return database('accounts')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('accounts')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('accounts').delete().where('id', id);
  }
};