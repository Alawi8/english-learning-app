<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/texts">Texts</router-link>
      <router-link to="/audio">Audio</router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f4f4f4;
    border-bottom: 2px solid #ccc;
  }
  .navbar a {
    text-decoration: none;
    color: #2196F3;
    font-weight: bold;
  }
  .navbar a.router-link-exact-active {
    color: #4CAF50;
  }
  </style>
  