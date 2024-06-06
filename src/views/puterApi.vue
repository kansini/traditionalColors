<script setup lang="ts">
import {ref} from "vue";
import $http from "../api/index";

const baseUrl = 'http://api.puter.localhost:4100'
const getData = () => {
  $http.post(`${baseUrl}/readdir`,
      {
        path: "/7d",
        token: token.value
      }).then((res: any) => {
    console.log('=========', res.data)
  })
}
const username = ref('')
const password = ref('')
const token = ref('')
const isLogin = ref(false)
const handleLogin = () => {
  $http.post(`${baseUrl}/login/`, {
    username: username.value,
    password: password.value
  }).then((res: any) => {
    if (res.status === 200) {
      isLogin.value = true
      token.value = res.data.token
      console.log('=====LOGIN====', res)
    } else {
      isLogin.value = false
      console.log('=====Error======', res.data)
    }
  })
  // .then(() => getData())
}

</script>

<template>
  <div v-if="!isLogin">
    <input type="text" v-model="username">
    <input type="text" v-model="password">
    <button @click="handleLogin">login</button>
  </div>
  <div v-else>{{ token }}</div>
  <div>
    <button @click="getData">getData</button>
  </div>
</template>

<style scoped lang="scss">

</style>