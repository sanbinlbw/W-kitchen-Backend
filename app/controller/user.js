'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const { account, password, userName } = ctx.request.body;
    const result = await ctx.service.user.register.index(
      account,
      password,
      userName
    );
    ctx.body = result;
  }

  async login() {
    const { ctx } = this;
    const { account, password } = ctx.request.body;
    const result = await ctx.service.user.login.index(account, password);
    ctx.body = result;
  }
}

module.exports = UserController;
