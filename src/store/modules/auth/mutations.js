export default {
  setUser(state, payload) {
    state.email = payload.email;
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
