import Vue from 'vue';

const success = (shop, resolve) => {
  resolve(shop);
};

const failed = (errors, reject) => {
  reject(errors.error);
};

export default (shop) => {
  const data = shop;
  // Object.keys(shop).map((k) => {
  //   data.append(k, shop[k]);
  //   return null;
  // });
  return new Promise((resolve, reject) => {
    Vue.$http
      .request({
        url: '/shop',
        data,
        method: 'put',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
};
