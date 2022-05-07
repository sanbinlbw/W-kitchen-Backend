'use strict';

const Service = require('egg').Service;

class RegisterService extends Service {
  async index(account, password, userName) {
    const body = {
      id: new Date().getTime(),
      account,
      password,
      userName,
    };

    let isExist = false;
    let result = {};

    await this.ctx.model.User.findOne({ account }, (err, data) => {
      if (!err && data) {
        isExist = true;
      }
    });

    if (isExist) {
      result = {
        code: 202,
        msg: '账户已存在',
      };
      // eslint-disable-next-line no-else-return
    } else {
      this.ctx.model.User.create(body);
      result = {
        code: 200,
        msg: '注册成功',
      };
    }
    return result;
  }
}

module.exports = RegisterService;
