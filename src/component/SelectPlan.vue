<template>
    <div class="plan-container">
        <div class="button-container">
            <PlanButton v-for="(plan, index) in PlanOptions" :key="index" :plan="plan"
                :selected="selectedPlan === plan.name" @click="selectedPlan = plan.name" :period-type="periodType" />
        </div>
        <div class="switch-container">
            <el-switch class="plan-switch" v-model="periodType" active-text="Yearly" inactive-text="Monthly"
                :active-value="PeriodType.YEARLY" :inactive-value="PeriodType.MONTHLY" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';
import PlanButton from './subItem/PlanButton.vue';
import { ref } from 'vue';

// 控制月付/年付
const periodType = ref<PeriodType>(PeriodType.MONTHLY);
// 當前選中的方案名稱
const selectedPlan = ref('Arcade');

const PlanOptions = [
    {
        name: 'Arcade',
        monthlyPrice: 9,
        yearlyPrice: 90,
        iconPath: 'src/assets/images/icon-arcade.svg'
    },
    {
        name: 'Advanced',
        monthlyPrice: 12,
        yearlyPrice: 120,
        iconPath: 'src/assets/images/icon-advanced.svg'
    },
    {
        name: 'Pro',
        monthlyPrice: 15,
        yearlyPrice: 150,
        iconPath: 'src/assets/images/icon-pro.svg'
    }
];
</script>

<style scoped lang="scss">
.plan-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.title {
    font-size: 30px;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between; // 或 center
    align-items: flex-start;
    margin-top: 30px;
    width: 100%;
}

.switch-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: $blue-100;
    border-radius: 10px;
    margin-top: 25px;
}
</style>