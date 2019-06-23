const express = require('express');
const router = express.Router();

const queries = require('../queries/roles');

router.get('/', (request, response, next) => {
  queries.list('roles').then(roles => {
    response.json({
      roles
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(role => {
    role
      ?
      response.json({
        role
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(role => {
    response.status(201).json({
      role: role
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(role => {
    response.json({
      role: role[0]
    });
  }).catch(next);
});

module.exports = router;