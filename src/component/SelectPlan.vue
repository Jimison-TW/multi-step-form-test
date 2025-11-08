<template>
    <div class="plan-container">
        <div class="plan-wrapper">
            <PlanButton v-for="(plan, index) in PlanOptions" :key="index" :plan="plan" />
        </div>
        <div class="switch-wrapper">
            <el-switch v-model="value" active-text="Monthly" inactive-text="Yearly" />
        </div>
    </div>
</template>

<script setup lang="ts">
import PlanButton from './subItem/PlanButton.vue';
import NavigationButton from './subItem/NavigationButton.vue';

let value = false;

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

.plan-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between; // 或 center
    align-items: flex-start;
    margin-top: 30px;
}

.switch-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: $blue-100;
    border-radius: 10px;
    margin-top: 25px;
}


.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
    // width: 100%;
    // display: flex;
    // justify-content: flex-end;
}
</style>