<template>
  <h1>APP</h1>
</template>
<script setup lang="ts">
import request from './utils/request';
console.log(request);
request
  .post('/user/login', {
    username: 'admin',
    password: '111111',
  })
  .then((res) => {
    console.log(res);
  });
</script>
<style scoped></style>
