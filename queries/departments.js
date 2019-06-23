const database = require('../database-connection');

module.exports = {
  list() {
    return database('departments').select();
  },
  read(id) {
    return database('departments').select().where('id', id).first();
  },
  create(id) {
    return database('departments')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('departments')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('departments').delete().where('id', id);
  }
};