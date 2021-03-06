const express = require('express');
const router = express.Router();

const queries = require('../queries/partners');

router.get('/', (request, response, next) => {
  queries.list('partners').then(partners => {
    response.json({
      partners
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(partner => {
    partner
      ?
      response.json({
        partner
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(partner => {
    response.status(201).json({
      partner: partner
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(partner => {
    response.json({
      partner: partner[0]
    });
  }).catch(next);
});

module.exports = router;