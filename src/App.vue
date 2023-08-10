<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const data = ref([]);

onMounted(() => {
  async function getData() {
    try { 
      const response = await axios.get('https://dev.aicap.tech/api/v1/interview/projects/');
      data.value = response.data
    } catch (err) {
      console.log(err)
    } finally {
      console.log('request is completed')
    }
  }
  getData()
})

</script>

<template>
  <div class="flex flex-row mb-7 transform translate-x-20 translate-y-5">
    <h3 class="text-xl text-gray-50 ">Список проектов</h3>
  </div>
  <div class="w-2/5">
    <div class="ml-5 flex">
          <label for="first_name" class="w-[250px] mt-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фильтр по названию</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите название" required>
      </div>
  
      <div class="ml-5 flex mt-2 mb-2">
        <label for="countries" class="flex w-[100px] block text-sm mt-1 font-medium text-gray-900 dark:text-white">Status</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Фильтр по статусу</option>
            <option value="1">В процессе</option>
            <option value="2">Закончено</option>
          </select>
      </div>
  </div>
  <hr>
  <div class="w-full transform translate-x-20 translate-y-5 flex flex-col flex-wrap gap-3 mb-10">
    <div v-for="items in data.results" :key="items.id">
      <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><strong>{{ items.id }}</strong> {{ items.status }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ items.title }}</p>
      </a>

    </div>

  </div>
  <hr>
</template>

<style scoped>

</style>
