const express = require('express');
const router = express.Router();

const queries = require('../queries/users');

router.get('/', (request, response, next) => {
  queries.list('users').then(users => {
    response.json({
      users
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(user => {
    user
      ?
      response.json({
        user
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(user => {
    response.status(201).json({
      user: user
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(user => {
    response.json({
      user: user[0]
    });
  }).catch(next);
});

module.exports = router;