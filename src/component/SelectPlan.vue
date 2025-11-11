<template>
    <div class="plan-container">
        <div class="button-container">
            <PlanButton v-for="(plan, index) in PlanOptions" :key="index" :plan="plan"
                :selected="props.selectedPlan.name === plan.name" @click="emit('update:selectedPlan', {
                    name: plan.name,
                    price: _periodType === PeriodType.MONTHLY ? plan.monthlyPrice : plan.yearlyPrice
                })" :period-type="_periodType" />
        </div>
        <div class="switch-container">
            <el-switch class="plan-switch" v-model="_periodType" active-text="Yearly" inactive-text="Monthly"
                :active-value="PeriodType.YEARLY" :inactive-value="PeriodType.MONTHLY" @change="onSwitchChange" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';
import PlanButton from './subItem/PlanButton.vue';
import { computed, ref } from 'vue';
import type { PlanItem } from '@/const/interface';

const props = defineProps<{
    periodType: PeriodType,
    selectedPlan: PlanItem
}>();

const emit = defineEmits<{
    (e: 'update:periodType', value: PeriodType): void;
    (e: 'update:selectedPlan', value: PlanItem): void;
}>();

// 控制月付/年付
const _periodType = ref<PeriodType>(props.periodType);

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

const onSwitchChange = (val: PeriodType) => {
    emit('update:periodType', val);

    const plan = PlanOptions.find(p => p.name === props.selectedPlan.name)!;
    emit('update:selectedPlan', {
        name: plan.name,
        price: val === PeriodType.MONTHLY ? plan.monthlyPrice : plan.yearlyPrice
    });
};
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