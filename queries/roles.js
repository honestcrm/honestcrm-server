const database = require('../database-connection');

module.exports = {
  list() {
    return database('roles').select();
  },
  read(id) {
    return database('roles').select().where('id', id).first();
  },
  create(id) {
    return database('roles')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('roles')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('roles').delete().where('id', id);
  }
};