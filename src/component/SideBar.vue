<template>
    <div class="sidebar-container">
        <img class="bg-img" />
        <div class="tip-wrapper">
            <StepTip v-for="(step, index) in steps" :key="index" :step="step" :isActive="currentStep === index + 1" />
        </div>
    </div>
</template>

<script setup lang="ts">
import StepTip from './subItem/StepTip.vue';

defineProps<{ currentStep: number }>();

// 建立一個步驟資料陣列
const steps = [
    { number: 1, title: 'Step 1', desc: 'Your info' },
    { number: 2, title: 'Step 2', desc: 'Select plan' },
    { number: 3, title: 'Step 3', desc: 'Add-ons' },
    { number: 4, title: 'Step 4', desc: 'Summary' }
]
</script>

<style scoped lang="scss">
.sidebar-container {
    position: relative;
    width: 274px;
    min-width: 274px;
    height: 568px;
    min-height: 568px;
}

.bg-img {
    content: url('@/assets/images/bg-sidebar-desktop.svg');
    width: 100%;
    height: auto; // 按比例縮放
    pointer-events: none; // 避免遮擋點擊
    z-index: 0;
}

.tip-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0 0 30px;
}

@media (max-width:767px) {
    .sidebar-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: unset;
    }

    .bg-img {
        content: url('@/assets/images/bg-sidebar-mobile.svg');
        display: block;
    }

    .tip-wrapper {
        flex-direction: row;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: unset;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>