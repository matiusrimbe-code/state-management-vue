<script setup>
import GrandChild from './GrandChild.vue'
const { numbers } = defineProps(['numbers'])
</script>
<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
  </div>
  <div class="line"></div>
  <GrandChild :numbers="numbers" />
</template>
