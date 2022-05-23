<template>
  <section class="item-filter">
    <div class="input-container">
      <input
        v-model="filterBy.name"
        @input="setFilter"
        type="text"
        placeholder="Search item.."
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'item-filter',
  data() {
    return {
      filterBy: {
        name: '',

        sortBy: '',
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
    },
  },
}
</script>

<style>
.title-container {
  height: 10vh;
}
.item-filter {
  background-color: rgb(152, 190, 183);

  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
