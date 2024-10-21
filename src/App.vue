<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavbarView.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
