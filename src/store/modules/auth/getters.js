export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  userEmail(state) {
    return state.email;
  },
  isAuthenticated(state) {
    // !! => true boolean
    return !!state.token;
  },
};
