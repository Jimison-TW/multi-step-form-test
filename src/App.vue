<script setup lang="ts">
import SideBar from './component/SideBar.vue';
import PersonalInfo from './component/PersonalInfo.vue';
import SelectPlan from './component/SelectPlan.vue';
</script>

<template>
  <div class="popup-container">
    <SideBar />
    <!-- <PersonalInfo /> -->
    <SelectPlan />
  </div>
</template>

<style scoped>
.popup-container {
  display: flex;
  flex-direction: row;
}
</style>
