const express = require('express');
const router = express.Router();

const queries = require('../queries/states');

router.get('/', (request, response, next) => {
  queries.list('states').then(states => {
    response.json({
      states
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(state => {
    state
      ?
      response.json({
        state
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(state => {
    response.status(201).json({
      state: state
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(state => {
    response.json({
      state: state[0]
    });
  }).catch(next);
});

module.exports = router;