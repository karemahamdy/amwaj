<template>
  <div>
    <!-- <button @click="loadData">Load Data</button> -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title || item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getData } from './api/api'
import type { Post } from './types/types.ts'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: [] as Post[]
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const endpoint = '/posts'
      try {
        this.items = await getData<Post[]>(endpoint)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
  }
})
</script>
