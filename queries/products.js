const database = require('../database-connection');

module.exports = {
  list() {
    return database('products').select();
  },
  read(id) {
    return database('products').select().where('id', id).first();
  },
  create(id) {
    return database('products')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('products')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('products').delete().where('id', id);
  }
};