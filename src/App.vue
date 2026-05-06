<script setup>
import { ref } from 'vue'

const red = ref(0)
const green = ref(0)
const blue = ref(0)
</script>

<template>
  <main :style="{ backgroundColor: `rgb(${red},${green},${blue})` }">
    <div class="container">
      <input type="text" v-model="red" class="input-text" placeholder="Nilai Red" />
      <input type="text" v-model="green" class="input-text" placeholder="Nilai Green" />
      <input type="text" v-model="blue" class="input-text" placeholder="Nilai Blue" />
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: gray;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.input-text {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
}
</style>
