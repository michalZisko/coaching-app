export default {
  async login(context, payload) {
    //http request
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnuoKsn1D9hIeUooxBrNx_6KFOZNO7u3s`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();
    console.log(data.email);

    if (!response.ok) {
      const error = new Error(data.message || "Failed to authenticate");
      throw error;
    }

    context.commit("setUser", {
      email: data.email,
      token: data.idToken,
      userId: data.localId,
      tokenExporation: data.expiresIn,
    });
  },

  // for user registration
  async signUp(context, payload) {
    //http request
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnuoKsn1D9hIeUooxBrNx_6KFOZNO7u3s`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    // console.log(response);

    const data = await response.json();
    // console.log("data.email: ", data.email);
    // console.log("data.email: ", data.email);

    if (!response.ok) {
      const error = new Error(data.message || "Failed to authenticate");
      throw error;
    }

    context.commit("setUser", {
      email: data.email,
      token: data.idToken,
      userId: data.localId,
      tokenExporation: data.expiresIn,
    });
  },
  logOut(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExporation: null,
      email: null,
    });
  },
};
