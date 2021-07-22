const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  static async createOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );

    const order = await Order.insert(value);

    return order;
  }

  static async updateOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order updated for ${value.quantity}`
    );

    const order = await Order.putById(value);

    return order;
  }

  static async deleteOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order cancelled for ${value.quantity}`
    );

    const order = await Order.deleteById(value);

    return order;
  }
};
