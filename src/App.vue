<template>
  <div class="center-wrapper">
    <button v-if="!isShowReceipt" @click="showPopup = true">Start Now</button>
    <div class="receipt" :class="{ active: isShowReceipt }">
      <SummaryPanel v-if="summary" :summary="summary" />
    </div>
  </div>
  <PopupView v-if="showPopup" @close="showPopup = false" @submit="handleSubmit" />
</template>

<script setup lang="ts">
import type { PlanSummary } from './const/interface';
import PopupView from './views/PopupView.vue';
import SummaryPanel from './component/subItem/SummaryPanel.vue';
import { ref } from 'vue';

const showPopup = ref(false)
const isShowReceipt = ref(false)
const summary = ref<PlanSummary>()

const handleSubmit = (payload: PlanSummary) => {
  console.log('父層收到資料：', payload)
  summary.value = payload
  isShowReceipt.value = true
  showPopup.value = false
}
</script>

<style scoped lang="scss">
.center-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.receipt {
  margin-top: 30px;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.receipt.active {
  opacity: 1;
}
</style>
