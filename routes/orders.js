const express = require('express');
const router = express.Router();

const queries = require('../queries/orders');

router.get('/', (request, response, next) => {
  queries.list('orders').then(orders => {
    response.json({
      orders
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(order => {
    order
      ?
      response.json({
        order
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(order => {
    response.status(201).json({
      order: order
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(order => {
    response.json({
      order: order[0]
    });
  }).catch(next);
});

module.exports = router;