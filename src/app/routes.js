/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

const Shops = (resolve) => {
  require.ensure(['./pages/withNavigation/shops/index/index.vue'], () => {
    //eslint-disable-next-line
    resolve(require('./pages/withNavigation/shops/index/index.vue'));
  }, 'shops');
};

const Navigation = (resolve) => {
  require.ensure(['./pages/withNavigation/navigation.vue'], () => {
    //eslint-disable-next-line
    resolve(require('./pages/withNavigation/navigation.vue'));
  }, 'navigation');
};

// eslint-disable-next-line
export default [
  // Components with the navigation wrapper.
  {
    path: '',
    component: Navigation,
    children: [
      {
        path: '/shops',
        name: 'shops',
        components: {
          default: Shops,
        },
        // If the user needs to be authenticated to view this page
        meta: {
          auth: false,
        },
        children: [
        ],
      },
      {
        path: '/*',
        redirect: '/shops',
      },
    ],
  },
];
