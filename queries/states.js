const database = require('../database-connection');

module.exports = {
  list() {
    return database('states').select();
  },
  read(id) {
    return database('states').select().where('id', id).first();
  },
  create(id) {
    return database('states')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('states')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('states').delete().where('id', id);
  }
};