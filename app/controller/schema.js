'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async setSchema() {
    const { ctx } = this;
    const { userId = 0, pageId = 'test', schema } = ctx.request.body;
    const result = await ctx.service.schema.setSchema.index(
      userId,
      pageId,
      schema
    );
    ctx.body = result;
  }

  async getSchema() {
    const { ctx } = this;
    const { userId = 0, pageId = 'test' } = ctx.request.body;
    const result = await ctx.service.schema.getSchema.index(userId, pageId);
    ctx.body = result;
  }
}

module.exports = UserController;
