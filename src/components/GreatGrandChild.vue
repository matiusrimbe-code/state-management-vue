<script setup>
import { inject } from 'vue'

const numbers = inject('numbers')
</script>
<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ numbers }}
  </div>
</template>
