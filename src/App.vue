<script setup>
import Parent from './components/Parent.vue'
import { ref } from 'vue'
const numbers = ref([1, 2, 3, 4, 5, 6, 7])
</script>

<template>
  <main>
    <Parent :numbers="numbers" />
  </main>
</template>

<style scoped>
main {
  background-color: gray;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
