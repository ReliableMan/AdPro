<script setup> 
import { onMounted, ref } from 'vue';
import { usePostStore } from '../store/index';

const postStore = usePostStore();
onMounted(() => {
  postStore.getPosts()
}) 
</script>

<template>
  <div v-if="postStore.loader" class="w-full h-2/6 flex flex-row justify-center items-center">
    <span class="loader"></span>
  </div>
    <div v-if="!postStore.loader" class="w-full transform translate-x-20 translate-y-5 flex flex-col flex-wrap gap-3 mb-10">
      <div v-for="items in postStore.posts" :key="items.id">
          <a class="block cursor-pointer max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><strong>{{ items.id }}</strong> {{ items.status }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{ items.title }}</p>
          </a>
      </div>
    </div>
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