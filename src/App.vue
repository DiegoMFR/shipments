<script setup lang="ts">
import MainView from './components/MainView.vue'
import SideBar from './components/SideBar.vue';
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <div class="flex m-0 p-0 w-full h-full grow bg-background-it shrink-0">
    <SideBar/>
    <div class="flex flex-col w-full">
      <HeaderBar/>
      <MainView/>
    </div>
  </div>
  
</template>
