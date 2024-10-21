<template>
  <div class="home">
    <h1 class="title">Welcome to the English Learning App</h1>
    <p class="subtitle">Start your journey to mastering English today!</p>

    <!-- صورة توضيحية -->
    <img 
      src="https://via.placeholder.com/400x200.png?text=Learn+English" 
      alt="Learn English"
      class="illustration"
    />

    <!-- قائمة الميزات -->
    <ul class="features-list">
      <li class="feature-item">
        <i class="fas fa-book-open"></i> Explore English Texts
      </li>
      <li class="feature-item">
        <i class="fas fa-volume-up"></i> Listen to English Pronunciation
      </li>
      <li class="feature-item">
        <i class="fas fa-edit"></i> Take Practice Tests
      </li>
    </ul>

    <!-- أزرار التنقل السريع -->
    <div class="buttons">
      <router-link to="/texts" class="btn">Explore Texts</router-link>
      <router-link to="/audio" class="btn">Listen to Audio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  background-color: #f4f4f4;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4CAF50;
}

.subtitle {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #555;
}

.illustration {
  margin: 2rem 0;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.feature-item {
  font-size: 1.1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
}

.feature-item i {
  margin-right: 0.5rem;
  color: #2196F3;
}

.buttons {
  margin-top: 2rem;
}

.btn {
  padding: 0.7rem 1.5rem;
  margin: 0.5rem;
  background-color: #2196F3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #1e87e5;
}
</style>
