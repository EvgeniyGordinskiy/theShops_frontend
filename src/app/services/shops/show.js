import Vue from 'vue';
import userTransformer from './../../transformers/account';

const success = ({ data }, resolve) => resolve(userTransformer.fetch(data));

const failed = () => {};

export default id => (
  new Promise((resolve, reject) => {
    Vue.$http.get(`/users/${id}`)
    .then((response) => {
      success(response, resolve);
    })
    .catch((error) => {
      failed(error, reject);
    });
  })
);
