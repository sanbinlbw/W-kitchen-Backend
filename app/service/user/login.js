'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(account, password) {
    console.log(account, password);
    const { ctx } = this;
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
        ctx.cookies.set(data.id, data.password, {
          maxAge: 1000 * 60 * 60 * 2,
        });
      }
    });

    return result;
  }
}

module.exports = LoginService;
