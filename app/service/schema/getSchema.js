'use strict';

const Service = require('egg').Service;

class GetSchemaService extends Service {
  async index(userId, pageId) {
    const result = {
      code: 200,
      data: {},
      msg: '未找到页面',
    };
    await this.ctx.model.Schema.findOne({ userId, pageId }, (err, data) => {
      if (!err && data) {
        console.log('success');
        result.data = data.schema;
        result.msg = '请求成功';
      }
    });
    console.log(userId, pageId);
    return result;
  }
}

module.exports = GetSchemaService;
