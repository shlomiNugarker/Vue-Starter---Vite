<template>
  <main class="edit-container flex-center">
    <section class="item-edit" v-if="itemToEdit">
      <h1>{{ formTitle }}</h1>

      <form @submit.prevent="save">
        <label>
          Name of the item?
          <input
            type="text"
            placeholder="Write the name here"
            v-model="itemToEdit.name"
          />
        </label>
        <!-- <label>
        Price of the item?
        <input type="number" v-model="itemToEdit.price" min="0" max="150" />
      </label> -->

        <button>Save</button>
      </form>
      <button @click="$router.push('/item/list')">Go back</button>
    </section>
    <p v-else>Loading...</p>
  </main>
</template>

<script>
import { itemService } from '../services/item/item-service'
export default {
  name: 'item-edit',
  data() {
    return {
      itemToEdit: null,
    }
  },
  async created() {
    this.getItem()
  },
  methods: {
    async getItem() {
      const { itemId } = this.$route.params
      if (itemId) {
        try {
          const item = await itemService.getById(itemId)
          console.log(item)
          this.itemToEdit = item
        } catch (err) {
          console.log(err)
        }
      } else this.itemToEdit = await itemService.getEmptyItem()
    },
    goBack() {
      this.$router.push('/')
    },
    async save() {
      try {
        console.log(this.itemToEdit)
        await this.$store.dispatch({ type: 'saveItem', item: this.itemToEdit })
        this.$router.push('/item/list')
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    formTitle() {
      const { itemId } = this.$route.params
      return itemId ? 'Edit Item' : 'Add a new item!'
    },
  },
}
</script>

<style>
.edit-container {
  min-height: 65vh;
}
.item-edit {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
