<template>
  <header>
    <nav>
      <h1><router-link to="/"> Find a Coach </router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li>
          <router-link v-if="isCoach" to="/requests">Requests</router-link>
        </li>
        <li>
          <base-button v-if="!isLoggedIn" link to="/login">Login</base-button>
        </li>
        <li>
          <base-button @click="logout" v-if="isLoggedIn" link to="/login"
            >Log out</base-button
          >
        </li>
        <li>
          <base-button v-if="!isLoggedIn" link to="/register-user"
            >Sign up</base-button
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
      this.$router.replace("/");
    },
  },
  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    buttonCaption() {
      if (this.isLoggedIn) {
        return "Log out";
      } else {
        return "Log in";
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
