<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found, maybe check out all
        <router-link class="link" to="/coaches"> Coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<style scoped>
.link {
  text-decoration: none;
  font-weight: bold;
  color: blueviolet;
  font-size: 1.2rem;
}
.link:hover,
.link:active {
  border-bottom: 3px solid violet;
  color: violet;
}
</style>
