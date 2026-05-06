<script setup>
import Parent from './components/Parent.vue'
</script>

<template>
  <main>
    <Parent />
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
