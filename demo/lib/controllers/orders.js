const { Router } = require('express');
const Order = require('../models/Order');
const OrderService = require('../services/OrderService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.createOrder(req.body);

      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {})
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const order = await Order.getByid(id);

      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {})
  .delete('/:id', async (req, res, next) => {});
