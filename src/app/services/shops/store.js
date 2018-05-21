import Vue from 'vue';
import userTransformer from './../../transformers/account';

const success = (resolve) => {
  Vue.router.push({
    name: 'users',
  });
  resolve();
};

const failed = (errors, reject) => {
  reject(userTransformer.fetch(errors));
};

export default (user) => {
  const data = new FormData();
  Object.keys(user).map((k) => {
    data.append(k, user[k]);
    return null;
  });

  return new Promise((resolve, reject) => {
    Vue.$http
      .request({
        url: 'users',
        data,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        success(resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
};
