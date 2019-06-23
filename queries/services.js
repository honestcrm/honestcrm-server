const database = require('../database-connection');

module.exports = {
  list() {
    return database('services').select();
  },
  read(id) {
    return database('services').select().where('id', id).first();
  },
  create(id) {
    return database('services')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('services')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('services').delete().where('id', id);
  }
};