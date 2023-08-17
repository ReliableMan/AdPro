<script setup>
import { ref } from 'vue';
import { usePostStore } from '../store/index';

const postStore = usePostStore();
const selected = ref('3');
const searchTitle = ref('');
</script>

<template>
  <div class="w-2/5">
    <div class="ml-5 flex">
      <label for="first_name" class="w-[250px] mt-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фильтр по названию</label>
      <input v-model="searchTitle" @input="postStore.filteredPostsByTitle(searchTitle)" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите название" required>
    </div>
      
    <div class="ml-5 flex mt-2 mb-2">
      <label for="countries" class="flex w-[100px] block text-sm mt-1 font-medium text-gray-900 dark:text-white">Фильтр по статусу</label>
        <select v-model="selected" @change="postStore.filteredPostsByStatus(selected)" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="3">Все</option>
          <option value="2">Закончено</option>
          <option value="1">В процессе</option>
        </select>
    </div>
  </div>
</template>
