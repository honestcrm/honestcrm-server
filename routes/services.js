const express = require('express');
const router = express.Router();

const queries = require('../queries/services');

router.get('/', (request, response, next) => {
  queries.list('services').then(services => {
    response.json({
      services
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(service => {
    service
      ?
      response.json({
        service
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(service => {
    response.status(201).json({
      service: service
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(service => {
    response.json({
      service: service[0]
    });
  }).catch(next);
});

module.exports = router;