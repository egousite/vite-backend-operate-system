<!-- 图标组件 -->
<template>
  <svg :width="width" :height="height">
    <use :xlink:href="prefix + name" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
// 定义组件属性
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
});
</script>
<style scoped></style>
