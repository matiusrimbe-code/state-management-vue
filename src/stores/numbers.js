import { defineStore } from 'pinia'

export const useNumbers = defineStore('numbers', {
  state: () => ({
    numbers: [11, 12, 13, 14, 15],
  }),

  actions: {
    addNumber() {
      this.numbers.push(this.numbers.length + 1)
    },
  },

  getters: {
    filterNumbers(state) {
      return (minNumber) => state.numbers.filter((num) => num >= minNumber)
    },
  },
})
