const database = require('../database-connection');

module.exports = {
  list() {
    return database('partners').select();
  },
  read(id) {
    return database('partners').select().where('id', id).first();
  },
  create(id) {
    return database('partners')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('partners')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('partners').delete().where('id', id);
  }
};