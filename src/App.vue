<template>

  <div class="center-wrapper"><button @click="showPopup = true">開啟表單</button></div>
  <PopupView class="popup-wrapper" v-if="showPopup" @close="showPopup = false" />
</template>

<script setup>
import PopupView from './views/PopupView.vue';
import { ref } from 'vue';

const showPopup = ref(true)
</script>

<style scoped>
.center-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
