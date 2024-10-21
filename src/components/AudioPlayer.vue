<template>
    <div class="audio-player">
      <h3>{{ title }}</h3>
      <button @click="playAudio">Play Audio</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'text'],
    methods: {
      playAudio() {
        const speech = new SpeechSynthesisUtterance(this.text);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
      },
    },
  };
  </script>
  
  <style scoped>
  .audio-player {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  button {
    margin-top: 0.5rem;
    padding: 0.3rem 0.8rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  