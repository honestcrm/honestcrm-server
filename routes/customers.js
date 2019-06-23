const express = require('express');
const router = express.Router();

const queries = require('../queries/customers');

router.get('/', (request, response, next) => {
  queries.list('customers').then(customers => {
    response.json({
      customers
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(customer => {
    customer
      ?
      response.json({
        customer
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(customer => {
    response.status(201).json({
      customer: customer
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(customer => {
    response.json({
      customer: customer[0]
    });
  }).catch(next);
});

module.exports = router;