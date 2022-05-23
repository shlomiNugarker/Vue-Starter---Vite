<template>
  <main class="item-app-view">
    <app-header />
    <item-filter @setFilter="setFilter" />
    <span class="add-toy">
      <router-link to="/item/edit">Add Item</router-link>
    </span>
    <router-view></router-view>
    <app-footer />
  </main>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import itemFilter from '../cmps/item-filter.vue'
import appFooter from '../cmps/app-footer.vue'
// import itemList from '../cmps/item-list.vue'
export default {
  name: 'item-app-view',
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'filter', filterBy })
    },
  },
  watch: {},
  components: {
    appHeader,
    itemFilter,
    // itemList,
    appFooter,
  },
}
</script>
<style>
.item-app-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: rgb(225, 201, 169);
}
.add-toy {
  background-color: rgb(130, 155, 137);
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
