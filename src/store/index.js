import { defineStore } from "pinia";
import { ref, watch } from "vue";
import axios from 'axios';

const url = "https://dev.aicap.tech/api/v1/interview/projects/"

export const usePostStore = defineStore("postStore", () => {
  const loader = ref(false)
  const posts = ref([]);
  const getPosts = async () => {
    try {
      loader.value = true;
      const response = await axios.get(url);
      posts.value = await response.data.results;
      setTimeout( async () => {
        loader.value = false
      }, 1000)
    } catch (err) { 
      console.log(err)
    } finally {
      localStorage.setItem('posts', JSON.stringify(posts.value));
      console.log('request is completed')
    }
  }
  
  const postOnLocalStorage = JSON.parse(localStorage.getItem("posts"));

  const filteredPosts = function onChange(val) {
    const tempVariable = postOnLocalStorage;
      val === "1" ? posts.value = tempVariable.filter((elem) => elem.status ==='IN_PROGRESS') : '';
      val === "2" ? posts.value = tempVariable.filter((elem) => elem.status ==='FINISHED') : '';
      val === "3" ? posts.value = tempVariable : '';
  }

  return {
    loader,
    posts,
    getPosts,
    filteredPosts,
    postOnLocalStorage
  }
})