'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('params', ctx.params);
    const userList = [
      {
        id: '1',
        username: 'sanbinlbw',
        password: '123456',
      },
      {
        id: 2,
        username: 'sanbinlbw',
        password: '123456',
      },
    ];
    const result = userList.find(item => item.id === ctx.params.id);
    ctx.body = {
      code: 200,
      data: result,
      msg: 'success',
    };
  }
}

module.exports = UserController;
