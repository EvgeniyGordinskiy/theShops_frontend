import Vue from 'vue';
import store from './../../store';
import clientTransformer from './../../transformers/account';

const success = ({ data }, resolve) => {
  const clients = clientTransformer.fetchCollection(data.data);

  store.dispatch('fetchAllClients', clients);
  resolve(clients);
};

const failed = (error, reject) => reject(error);


export default () => (
  new Promise((resolve, reject) => {
    Vue.$http.get('/shop')
    .then((response) => {
      success(response, resolve);
    })
    .catch((error) => {
      failed(error, reject);
    });
  })
);
