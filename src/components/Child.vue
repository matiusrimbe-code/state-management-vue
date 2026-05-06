<script setup>
// import { inject } from 'vue'
// const numbers = inject('numbers')
import GrandChild from './GrandChild.vue'
import { useNumbers } from '@/stores/numbers'
const { numbers, addNumber } = useNumbers()
</script>
<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
    <button @click="addNumber">Add Number</button>
  </div>
  <div class="line"></div>
  <GrandChild />
</template>
