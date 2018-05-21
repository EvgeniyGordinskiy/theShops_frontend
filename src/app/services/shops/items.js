import Vue from 'vue';

/* eslint no-console: ["error", { allow: ["log", "error"] }] */
const success = (data, resolve) => {
  // eslint-disable-next-line
  const shops = data['_links']['items'];
  // eslint-disable-next-line
  const pagination = data['_links']['paginate'];
  resolve({ shops, pagination });
};

const failed = (error, reject) => reject(error);


export default (page = 1, limit = 5, date = '', time = '') => {
  let url = `/shop?page=${page}&limit=${limit}`;

  if (date) {
    url += `&date=${date}`;
  }
  if (time) {
    url += `&time=${time}`;
  }
  return new Promise((resolve, reject) => {
    Vue.$http.get(url)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
};
