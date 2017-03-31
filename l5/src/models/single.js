export default {
  namespace: 'single',
  state: {
    /** 总数 */
    count: 0,
  },
  reducers: {
    /** 修改组件状态属性 */
    UPDATE_STATE: function (state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
  effects: {
    /** 增加工单量 */
    ADD: function* ({ payload }, { select, call, put }) {
      const states = yield select(state => state['single']);
      const params = {
        count: states['count'] + 1,
      };
      yield put({
        type: 'UPDATE_STATE',
        payload: params,
      });
    },
    /** 减少工单量 */
    REDUCE: function* ({ payload }, { select, call, put }) {
      const states = yield select(state => state['single']);
      const params = {
        count: states['count'] - 1,
      };
      yield put({
        type: 'UPDATE_STATE',
        payload: params,
      });
    },
  },
  subscriptions: {
    setup: function ({ dispatch }) {
      dispatch({
        type: 'ADD',
        payload: {},
      });
    }
  },
};
