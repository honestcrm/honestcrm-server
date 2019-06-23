const express = require('express');
const router = express.Router();

const queries = require('../queries/locations');

router.get('/', (request, response, next) => {
  queries.list('locations').then(locations => {
    response.json({
      locations
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(location => {
    location
      ?
      response.json({
        location
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(location => {
    response.status(201).json({
      location: location
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(location => {
    response.json({
      location: location[0]
    });
  }).catch(next);
});

module.exports = router;