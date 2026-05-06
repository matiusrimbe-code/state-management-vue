<script setup>
import { inject } from 'vue'
import GrandChild from './GrandChild.vue'
const numbers = inject('numbers')
</script>
<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
  </div>
  <div class="line"></div>
  <GrandChild />
</template>
