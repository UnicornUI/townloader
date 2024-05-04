<template>
  <div v-for="item in list" :key="item.id" :text="item.value" class="card">
    true
  </div>
  <Camera color="yellow"/>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import {Camera } from "lucide-vue-next"
  const list = reactive([
      {id : 1, value: "java" },
      {id : 2, value: "java" }
  ]);
</script>

<style scoped>

.card {
  width: 100px;
  height: 100px;
  padding: 10px;
  color: black;
  background: yellow;
  border-radius: 10px;
}

</style>

