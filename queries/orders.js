const database = require('../database-connection');

module.exports = {
  list() {
    return database('orders').select();
  },
  read(id) {
    return database('orders').select().where('id', id).first();
  },
  create(id) {
    return database('orders')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('orders')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('orders').delete().where('id', id);
  }
};