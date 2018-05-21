/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

// Shops
export const users = state => ({
  items: state.users.items,
  pagination: state.users.pagination,
});

export const allShops = state => state.shops.all;
