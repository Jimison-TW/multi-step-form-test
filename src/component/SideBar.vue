<template>
    <div class="sidebar-container">
        <div class="image-bg">
            <div class="tip-wrapper">
                <StepTip v-for="(step, index) in steps" :key="index" :step="step" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import StepTip from './StepTip.vue';

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
    margin: 20px;
}

.image-bg {
    background-image: url('@/assets/images/bg-sidebar-desktop.svg');
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;
    pointer-events: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    inset: 0;
    width: 100%;
    height: 100%;
}

.tip-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0 0 30px;
}
</style>