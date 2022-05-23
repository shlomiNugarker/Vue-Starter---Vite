<template>
  <section>
    <main v-if="!isLoading">
      <div class="links">
        <router-link to="/">Home</router-link>|
        <router-link to="/item/list">App</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/login">Login</router-link>
      </div>

      <router-view />
    </main>
    <div class="loading" v-if="isLoading">
      <p>loading...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch({ type: 'loadItems' })
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    },
  },
  components: {},
}
</script>

<style>
.links {
  position: fixed;
}
a {
  color: rgba(0, 0, 0, 0.715);
}
.loading {
  height: 100vh;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
