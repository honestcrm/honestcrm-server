const express = require('express');
const router = express.Router();

const queries = require('../queries/accounts');

router.get('/', (request, response, next) => {
  queries.list('accounts').then(accounts => {
    response.json({
      accounts
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(account => {
    account
      ?
      response.json({
        account
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(account => {
    response.status(201).json({
      account: account
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(account => {
    response.json({
      account: account[0]
    });
  }).catch(next);
});

module.exports = router;