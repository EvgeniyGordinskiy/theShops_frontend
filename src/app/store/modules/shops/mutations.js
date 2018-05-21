  import {
    FETCH_SHOPS,
    RESET_SHOPS,
    FETCH_ALL_SHOPS,
  } from './../../mutation-types';

  export default {
    [FETCH_SHOPS](state, { shops, pagination }) {
      state.items = shops;
      state.pagination = pagination;
    },

    [RESET_SHOPS](state) {
      state.all = [];
      state.items = [];
      state.pagination = {};
    },

    [FETCH_ALL_SHOPS](state, shops) {
      state.all = shops;
    },
  };
