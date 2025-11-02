<script setup lang="ts">
import SideBar from './component/SideBar.vue';
import PersonalInfo from './component/PersonalInfo.vue';
</script>

<template>
  <div class="popup-container">
    <SideBar />
    <PersonalInfo />
  </div>
</template>

<style scoped>
.popup-container {
  display: flex;
  flex-direction: row;
}
</style>
