<template>
  <header class="app-header">
    <div class="title-container">
      <h1>Item Title</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
  components: {},
}
</script>
<style>
.app-header {
  background-color: rgb(167, 216, 219);
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
