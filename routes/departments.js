const express = require('express');
const router = express.Router();

const queries = require('../queries/departments');

router.get('/', (request, response, next) => {
  queries.list('departments').then(departments => {
    response.json({
      departments
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(department => {
    department
      ?
      response.json({
        department
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(department => {
    response.status(201).json({
      department: department
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(department => {
    response.json({
      department: department[0]
    });
  }).catch(next);
});

module.exports = router;