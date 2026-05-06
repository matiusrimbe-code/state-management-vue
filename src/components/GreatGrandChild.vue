<script setup>
const { numbers } = defineProps(['numbers'])
</script>
<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ numbers }}
  </div>
</template>
