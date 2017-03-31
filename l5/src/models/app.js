export default {
  namespace: 'app',
  state: {
    /** 用户登录状态 */
    isLogin: false,
  },
  reducers: {
    /** 设置用户状态为登录 */
    SET_LOGIN_IN: function (state, action) {
      return Object.assign({}, state, {
        isLogin: true,
      });
    },
    /** 设置用户状态为未登录 */
    SET_LOGIN_OUT: function (state, action) {
      return Object.assign({}, state, {
        isLogin: false,
      });
    },
  },
  effects: {

  },
  subscriptions: {

  },
};
