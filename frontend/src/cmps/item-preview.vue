<template>
  <li class="item-preview">
    <section>
      <div>
        <p>{{ item.name }}</p>
      </div>
      <div>
        <button @click="goToDetail">Details</button>
        <button @click="goToEdit">Edit</button>
        <button @click="removeItem(item._id)">Delete</button>
      </div>
    </section>
  </li>
</template>

<script>
export default {
  name: 'item-preview',
  props: {
    item: Object,
  },
  components: {},
  methods: {
    goToDetail() {
      this.$router.push(`/item/${this.item._id}`)
    },
    goToEdit() {
      console.log(this.item._id)
      this.$router.push(`edit/${this.item._id}`)
    },
    removeItem(itemId) {
      this.$emit('removeItem', itemId)
    },
  },
}
</script>

<style>
.item-preview {
  background-color: rgb(181, 219, 206);
  margin: 5px;
}

li {
  padding: 10px;
}
</style>
