<script setup>
import { ref } from 'vue';
import { usePostStore } from '../store/index';

const postStore = usePostStore();
const page = ref(1);

function changePage (symbol) {
  symbol === '+' ? page.value += 1 : page.value -= 1;
  postStore.getPosts();
}
</script>

<template>

  <div class="w-full transform translate-x-40 translate-y-5">
    <div class="flex ">
      <!-- Previous Button -->
      <a @click="changePage('-')" :class="{'disabled': page <= 1}" class="cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
        <p class="text-2xl font-bold text-white">&nbsp; {{ page }}</p>
      <!-- Next Button -->
      <a @click="changePage('+')" class="cursor-pointer flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </div>
  </div>

</template>

<style scoped>
.disabled {
  cursor: default;
  pointer-events: none;        
  text-decoration: none;
  color: grey;
}
</style>