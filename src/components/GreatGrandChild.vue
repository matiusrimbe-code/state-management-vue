<script setup>
// import { inject } from 'vue'
// const numbers = inject('numbers')
import { useNumbers } from '@/stores/numbers'
const { filterNumbers } = useNumbers()
</script>
<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ filterNumbers(11) }}
  </div>
</template>
