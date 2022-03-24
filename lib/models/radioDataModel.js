// import * as services from '@/services';
export default {
  namespace: 'radioDataModel',
  state: {
    title: '',
    name: '',
    list: []
  },
  effects: {
    *testEffect({
      payload
    }, {
      call,
      put,
      select
    }) {
      const {
        name
      } = yield select(state => state.pageModel);
    }

  },
  reducers: {
    changeData(state, {
      payload
    }) {
      return { ...state,
        ...payload
      };
    }

  }
};