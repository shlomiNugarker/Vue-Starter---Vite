<template>
  <section class="item-details-view">
    <div class="item" v-if="item">
      <p>Name: {{ item.name }}</p>
      <p>Id: {{ item._id }}</p>
      <p>Description: {{ item.description }}</p>

      <button @click="$router.push('/item/list')">Go back</button>
    </div>
    <p v-else>Loading..</p>
  </section>
</template>

<script>
import { itemService } from '../services/item/item-service'
export default {
  name: 'item-details-view',
  data() {
    return {
      item: null,
    }
  },
  created() {
    this.getItem()
  },
  computed: {
    formatDate() {
      return new Date(this.item.createdAt).toDateString()
    },
    formatPrice() {
      // return new Intl.NumberFormat('en-US', {
      //   style: 'currency',
      //   currency: 'USD',
      // }).format(this.item.price)
    },
  },
  methods: {
    async getItem() {
      const itemId = this.$route.params.itemId
      this.item = await itemService.getById(itemId)
    },
    saveToy() {
      const item = JSON.parse(JSON.stringify(this.item))
      this.$store.dispatch({ type: 'saveItem', item })
    },
    goBack() {
      this.$router.push('/')
    },
  },
  watch: {
    '$route.params.itemId'() {
      this.getItem()
    },
  },
  components: {},
}
</script>

<style>
.item-details-view {
  background-color: rgb(208, 180, 168);
  height: 65vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
