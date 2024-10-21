<template>
    <div class="audio">
      <!-- <Navbar /> -->
      <h2 class="text-2xl font-bold">استمع للنصوص الإنجليزية</h2>
      <div>
        <textarea v-model="textToRead" placeholder="اكتب النص هنا..." class="textarea"></textarea>
        <button @click="readText" class="btn-read">اقرأ النص</button>
      </div>
    </div>
  </template>
  
  <script>
  // import Navbar from '@/components/NavbarView.vue';
  
  export default {
    // components: { Navbar },
    data() {
      return {
        textToRead: '',
      };
    },
    methods: {
      readText() {
        const speech = new SpeechSynthesisUtterance(this.textToRead);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
      },
    },
  };
  </script>
  
  <style scoped>
  .textarea {
    width: 100%;
    height: 100px;
    margin: 1rem 0;
  }
  .btn-read {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  