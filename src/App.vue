<template>
  <div>
    <!-- <button @click="loadData">Load Data</button> -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title || item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getData } from './api/api.js'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted(){
    this.loadData()
  },
  methods: {
    async loadData() {
      const endpoint = '/posts'    
      try {
        this.items = await getData(endpoint)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
  }
}
</script>
