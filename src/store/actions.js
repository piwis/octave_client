export default {

  USER_CONNECT: ({ commit }) => {
    return userConnect().then(email => {
      commit('SET_USER_CONNECT', email);
    });
  },
};
