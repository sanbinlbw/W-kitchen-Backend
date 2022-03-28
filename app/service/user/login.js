'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(account, password) {
    let result = {
      code: 403,
      id: null,
      msg: '登陆失败，请检查账号或密码是否正确。',
    };
    await this.ctx.model.User.findOne({ account, password }, (err, data) => {
      if (!err && data) {
        result = {
          code: 200,
          id: data.id,
          msg: '登陆成功',
        };
      }
    });

    return result;
  }
}

module.exports = LoginService;
