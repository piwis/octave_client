import Vue from 'vue';

export default {
  SET_USER_CONNECT: (state, { data }) => {
    Vue.set(state, 'userConnect', data);
  },
};
