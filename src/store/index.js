import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from 'axios';

const url = "https://dev.aicap.tech/api/v1/interview/projects/"

export const usePostStore = defineStore("postStore", () => {
  const loader = ref(false);
  const posts = ref([]);

  const getPosts = async () => {
    try {
      loader.value = true;
      const response = await axios.get(url);
      console.log('resp', response.data)
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
  const tempVariable = postOnLocalStorage;

  const filteredPostsByStatus = function onChange(val) {
      val === "1" ? posts.value = tempVariable.filter((elem) => elem.status ==='IN_PROGRESS') : '';
      val === "2" ? posts.value = tempVariable.filter((elem) => elem.status ==='FINISHED') : '';
      val === "3" ? posts.value = tempVariable : '';
  }

  const filteredPostsByTitle = function filterByTitle(search) {
    posts.value = tempVariable.filter((elem) => elem.title.toLowerCase().includes(search.toLowerCase()))
  }

  return {
    loader,
    posts,
    getPosts,
    postOnLocalStorage,
    filteredPostsByTitle,
    filteredPostsByStatus,
  }
})