<script setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from './store/index';

const postStore = usePostStore();
onMounted(() => {
  postStore.getPosts()
}) 

const selected = ref('3');
</script>

<template>
  <div class="flex flex-row mb-7 transform translate-x-20 translate-y-5">
    <h3 class="text-xl text-gray-50">Список проектов</h3>
  </div>
  <div class="w-2/5">
    <div class="ml-5 flex">
          <label for="first_name" class="w-[250px] mt-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фильтр по названию</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите название" required>
      </div>
  
      <div class="ml-5 flex mt-2 mb-2">
        <label for="countries" class="flex w-[100px] block text-sm mt-1 font-medium text-gray-900 dark:text-white">Фильтр по статусу</label>
          <select v-model="selected" @change="postStore.filteredPosts(selected)" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="3">Все</option>
            <option value="2">Закончено</option>
            <option value="1">В процессе</option>
          </select>
      </div>
  </div>
  <hr>
  <div v-if="postStore.loader" class="w-full h-2/6 flex flex-row justify-center items-center">
    <span class="loader"></span>
  </div>
  <div v-if="!postStore.loader" class="w-full transform translate-x-20 translate-y-5 flex flex-col flex-wrap gap-3 mb-10">
    <div v-for="items in postStore.posts" :key="items.id">
      <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><strong>{{ items.id }}</strong> {{ items.status }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ items.title }}</p>
      </a>

    </div>
  </div>
  <hr>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>
