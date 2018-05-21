/* ============
 * Shop Menu Component
 * ============
 *
 * Menu to navigate between to shops.
 */

export default {
  props: {
    /**
     * The menu items to be rendered. Each item is a object containing the route name and the title.
     *
     * @type {Array}
     */
    items: {
      type: Array,
      required: true,
    },
  },
};
