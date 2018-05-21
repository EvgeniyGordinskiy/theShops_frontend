/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types';


// Shops
export const fetchShops = ({ commit }, { users, pagination }) => {
  commit(types.FETCH_SHOPS, { users, pagination });
};

export const fetchAllShops = ({ commit }, users) => {
  commit(types.FETCH_ALL_SHOPS, users);
};

export const resetShops = ({ commit }) => {
  commit(types.RESET_SHOPS);
};
