<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 3rem;
  box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
