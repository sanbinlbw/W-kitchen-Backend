'use strict';

const Service = require('egg').Service;

class SetSchemaService extends Service {
  async index(userId, pageId, schema) {
    const body = {
      userId,
      pageId,
      schema,
    };
    let result = {};
    let isExist = false;

    await this.ctx.model.Schema.findOne({ userId, pageId }, (err, data) => {
      if (!err && data) {
        isExist = true;
      }
    });

    if (isExist) {
      result = {
        code: 202,
        msg: '页面名称已存在',
      };
      // eslint-disable-next-line no-else-return
    } else {
      this.ctx.model.Schema.create(body);
      result = {
        code: 200,
        msg: '设置成功',
      };
    }
    return result;
  }
}

module.exports = SetSchemaService;
