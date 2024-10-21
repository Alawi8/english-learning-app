<template>
    <div class="reading-component">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <button @click="toggleTranslation">{{ showTranslation ? 'Hide' : 'Show' }} Translation</button>
      <p v-if="showTranslation">{{ translation }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'content', 'translation'],
    data() {
      return {
        showTranslation: false,
      };
    },
    methods: {
      toggleTranslation() {
        this.showTranslation = !this.showTranslation;
      },
    },
  };
  </script>
  
  <style scoped>
  .reading-component {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  button {
    margin-top: 0.5rem;
    padding: 0.3rem 0.8rem;
    background-color: #2196F3;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  