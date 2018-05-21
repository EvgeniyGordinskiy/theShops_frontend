/* ============
 * Home Index
 * ============
 *
 * This is the home page.
 */

import { mapGetters } from 'vuex';
import moment from 'moment';
import store from './../../../../store';
import shopService from './../../../../services/shops';
import Forms from './../../../../utils/forms/forms';
import Formvue from './../../../../components/form/form.vue';
import cardv from './../../../../components/card/card.vue';
import modalFormv from './../../../../components/modalForm/modalForm.vue';
import UpdateShopTransformer from './../../../../transformers/custom/updateShopTransformer';

export default {
  data() {
      return {
          formFilter: new Forms({
              date: '',
              time: ''
          }),
          form: new Forms({
              name: {
                  value: '',
                  type: 'text',
                  label: 'Name',
              },
              description: {
                  value: '',
                  type: 'textarea',
                  label: 'Description',
              },
              short_description: {
                  value: '',
                  type: 'textarea',
                  label: 'Short Description',
              },
              sunday_start: {
                  value: '',
                  type: 'time',
                  label: 'Sunday',
                  group_class: 'dayTime'
              },
              sunday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              monday_start: {
                  value: '',
                  type: 'time',
                  label: 'Monday',
                  group_class: 'dayTime'
              },
              monday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              tuesday_start: {
                  value: '',
                  type: 'time',
                  label: 'Tuesday',
                  group_class: 'dayTime'
              },
              tuesday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              wednesday_start: {
                  value: '',
                  type: 'time',
                  label: 'Wednesday',
                  group_class: 'dayTime'
              },
              wednesday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              thursday_start: {
                  value: '',
                  type: 'time',
                  label: 'Thursday',
                  group_class: 'dayTime'
              },
              thursday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              friday_start: {
                  value: '',
                  type: 'time',
                  label: 'Friday',
                  group_class: 'dayTime'
              },
              friday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
              saturday_start: {
                  value: '',
                  type: 'time',
                  label: 'Saturday',
                  group_class: 'dayTime'
              },
              saturday_end: {
                  value: '',
                  type: 'time',
                  group_class: 'dayTime'
              },
          }),
          loading: false,
          showModal: false,
          shop: {},
          titleEdit: 'Edit Shop',
          titleCreate: 'Create Shop',
          titleForm: '',
          dialogFormVisible: false,
          hasLabel: true,
          shops: [],
          formName: 'form',
          page: 1 ,
          limit: 50 ,
      };
  },
    
  computed: {
  },

  created() {
  },

  mounted() {
    this.all(this.page, this.limit);
  },

  destroyed() {
      store.dispatch('resetShops');
  },


    methods: {
       
        openFormEdit(shop) {
            this.shop = shop;
            this.titleForm = this.titleCreate;
            this.showModal = true;
            this.form.errors.clearAll();
            this.form.resetFields();
            this.form.assignData(shop);
        },
        
        openFormECreate() {
            this.titleForm = this.titleEdit;
            this.showModal = true;
            this.form.resetFields();
        },

        cancelForm() {
            this.showModal = false;
        },

        all(page, limit) {
            let date = '';
            let time = '';
            if (this.formFilter.date) {
                date = moment(this.formFilter.date).format('YYYY-MM-DD');
            }
            if (this.formFilter.time) {
                time = moment(this.formFilter.time).format('HH:mm');
            }
            if (!this.loading) {
                this.loading = true;
                shopService.items(page, limit, date, time)
                    .then((resp) => {
                        this.shops = resp.shops;
                        this.loading = false;
                    }).catch(() => {
                    this.loading = true;
                });
            };
        },
        /**
         * This method will be called when saving the form.
         */
        add() {

        },

        /**
         * This method will be called to update the shop.
         */
        update() {
            this.loading = false;
            this.form.loading = true;
            const shop = UpdateShopTransformer.send(Object.assign(Object.assign(this.form.data(),{ 'shop_id': this.shop['shop_id'] })));
            shopService.update(shop)
                .then(() => {
                    this.showModal = false;
                    this.all(1, 50);
                    this.loading = false;
                })
                .catch((errors) => {
                    console.log(errors);
                    this.form.recordErrors(errors);
                });
        },

        openConfirm(user) {
            this.dialogFormVisible = true;
            this.user = user;
        },

        /**
         * This method will be called to delete the user.
         */
        destroy() {
            this.loading = false;
            this.dialogFormVisible = false;
            console.log(this.$confirm);
            shopService.destroy(this.user.shop_id)
                .then(() => {
                    this.all(1, 50);
                    this.loading = false;
                })
                .catch((errors) => {
                    console.log(errors);
                });

        },

        search() {
            this.all(1, this.limit);
        }
    },
    
  components: {
        cardv: cardv,
        modalFormv: modalFormv,
        formv: Formvue,
  },
    

};
