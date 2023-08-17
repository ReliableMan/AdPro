<script setup>
import Filter from './components/Filter.vue';
import List from './components/List.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Navbar -->
  <div class="flex flex-row mb-7 transform translate-x-20 translate-y-5">
    <h3 class="text-xl text-gray-50">Список проектов</h3>
  </div>
  <!-- Filter -->
    <Filter/>
  <!-- List of posts -->
  <hr>
    <list/>
  <hr>
  <!-- Footer -->
  <Footer/>

</template>

