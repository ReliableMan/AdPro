import { defineStore } from "pinia";
import { ref, watch } from "vue";
import axios from 'axios';

const url = "https://dev.aicap.tech/api/v1/interview/projects/"

export const usePostStore = defineStore("postStore", () => {
  const loader = ref(false)
  const posts = ref([]);

  const getPosts = async () => {
    try {
      // loader.value = true;
      const response = await axios.get(url);
      posts.value = response.data.results;
      console.log('posts', posts.value)
      // loader.value = false
    } catch (err) { 
      console.log(err)
    } finally {
      localStorage.setItem('posts', JSON.stringify(posts.value));
      console.log('request is completed')
    }
  }
  
  const postOnLocalStorage = localStorage.getItem("posts");
  postOnLocalStorage ? posts.value = JSON.parse(postOnLocalStorage)._value : '';

  watch(() => posts, (state) => {
    localStorage.setItem('posts', JSON.stringify(state))
  })

  return {
    loader,
    posts,
    getPosts,
  }
})