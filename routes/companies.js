const express = require('express');
const router = express.Router();

const queries = require('../queries/companies');

router.get('/', (request, response, next) => {
  queries.list('companies').then(companies => {
    response.json({
      companies
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(company => {
    company
      ?
      response.json({
        company
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(company => {
    response.status(201).json({
      company: company
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(company => {
    response.json({
      company: company[0]
    });
  }).catch(next);
});

module.exports = router;