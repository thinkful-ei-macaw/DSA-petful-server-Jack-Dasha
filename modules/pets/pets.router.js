const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/cats', (req, res) => {
  const { nextCat } = Pets.get();
  return res.status(200).json({ nextCat });
});

router.get('/dogs', (req, res) => {
  const { nextDog } = Pets.get();
  return res.status(200).json({ nextDog });
});

router.delete('/api/cats', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue('cat');
  return res.status(201);
});

router.delete('/api/dogs', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue('dog');
  return res.status(201);
});

module.exports = router;
