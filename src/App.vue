<script setup lang="ts">
import SideBar from './component/SideBar.vue';
import PersonalInfo from './component/PersonalInfo.vue';
import SelectPlan from './component/SelectPlan.vue';
import AddOnes from './component/AddOnes.vue';
</script>

<template>
  <div class="popup-container">
    <SideBar />
    <!-- <PersonalInfo /> -->
    <!-- <SelectPlan /> -->
    <AddOnes />
  </div>
</template>

<style scoped>
.popup-container {
  display: flex;
  flex-direction: row;
}
</style>
