const database = require('../database-connection');

module.exports = {
  list() {
    return database('locations').select();
  },
  read(id) {
    return database('locations').select().where('id', id).first();
  },
  create(id) {
    return database('locations')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('locations')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('locations').delete().where('id', id);
  }
};