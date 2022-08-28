<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog
      :show="userCreated"
      title="Account created successfully!"
      @close="confirmUser"
    ></base-dialog>
    <form @submit.prevent="submitForm">
      <base-card>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div>
          <label for="confirm">Confirm Password</label>
          <input type="password" id="confirm" v-model.trim="confirm" />
        </div>
        <p></p>
        <p v-if="!formIsValid">
          Make sure you entered a valid email, and valid password both times
        </p>
        <base-button>Register</base-button>
        <span
          >Already have an account?
          <base-button link to="/login" type="button" mode="flat"
            >Login</base-button
          >
        </span>
      </base-card>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirm: "",
      formIsValid: true,
      isLoading: false,
      error: null,
      userCreated: false,
    };
  },

  methods: {
    confirmUser() {
      this.userCreated = false;
    },
    handleError() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        this.password !== this.confirm
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      // send http request
      try {
        await this.$store.dispatch("signUp", {
          email: this.email,
          password: this.password,
        });
        this.userCreated = true;
        this.email = this.password = this.confirm = "";
        this.$router.replace("/login");
      } catch (error) {
        this.error = error.message || "Failed to authenticate";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
