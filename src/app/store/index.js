/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

// Modules
import shops from './modules/shops';

Vue.use(Vuex);

export default new Vuex.Store({

  /**
   * Assign the actions to the store
   */
  actions,
  getters,
  /**
   * Assign the getters to the store
   */

  modules: {
    shops,
  },
});
