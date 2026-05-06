<script setup>
import GreatGrandChild from './GreatGrandChild.vue'
import useNumbers from '@/composables/useNumbers'
const { numbers, addNumber } = useNumbers()
</script>
<template>
  <div>
    <h1>Grand Child</h1>
    {{ numbers }}
    <button @click="addNumber">Add Number</button>
  </div>
  <div class="line"></div>
  <GreatGrandChild />
</template>
