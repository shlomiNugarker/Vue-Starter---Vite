<template>
  <section class="list-view">
    <ul class="clean-list" v-if="items">
      <item-preview
        @removeItem="removeItem"
        v-for="item in items"
        :item="item"
        :key="item._id"
      />
    </ul>
    <div v-if="!items.length">
      <button @click="$router.push('/')">Go home</button>
    </div>
  </section>
</template>

<script>
import itemPreview from '../cmps/item-preview.vue'

export default {
  name: 'list-view',
  props: {},
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$store.getters.items
    },
  },
  components: {
    itemPreview,
  },
  methods: {
    removeItem(itemId) {
      this.$store.dispatch({ type: 'removeItem', id: itemId })
    },
  },
}
</script>
<style>
.list-view {
  background-color: #c5c5c5;
  margin: 0;
  min-height: 65vh;
  overflow: auto;
  text-align: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 70vw;
  justify-content: center;
  padding: 10px;
}
</style>
