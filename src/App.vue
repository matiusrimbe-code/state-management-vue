<script setup>
import { reactive, ref } from 'vue'

// const red = ref(0)
// const green = ref(0)
// const blue = ref(0)

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// })

const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
})

function generateColor() {
  // red.value = Math.floor(Math.random() * 255)
  // green.value = Math.floor(Math.random() * 255)
  // blue.value = Math.floor(Math.random() * 255)
  color.red = Math.floor(Math.random() * 255)
  color.green = Math.floor(Math.random() * 255)
  color.blue = Math.floor(Math.random() * 255)
}

const refValue = ref('Hello')
const reactiveValue = reactive({
  greeting: 'World',
})

refValue.value = true
// reactiveValue = true
reactiveValue.greeting = false

console.log(refValue.value)
console.log(reactiveValue)
</script>

<template>
  <main :style="{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }">
    <div class="container">
      <input type="text" v-model="color.red" class="input-text" placeholder="Nilai Red" />
      <input type="text" v-model="color.green" class="input-text" placeholder="Nilai Green" />
      <input type="text" v-model="color.blue" class="input-text" placeholder="Nilai Blue" />
      <button class="input-text" @click="generateColor">Generate</button>
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
