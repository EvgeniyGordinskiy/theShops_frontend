import Vue from 'vue';

const success = (response, resolve) => {
  resolve(response);
};

const failed = (error, reject) => {
  reject(error);
};

export default id => (
  new Promise((resolve, reject) => {
    Vue.$http.delete(`/users/${id}`)
    .then((response) => {
      success(response, resolve);
    })
    .catch((error) => {
      failed(error, reject);
    });
  })
);
