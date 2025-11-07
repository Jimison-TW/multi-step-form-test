<template>
    <div class="finish-container">
        <h1 class="title">Finishing up</h1>
        <div>Double-check everything looks OK before confirming.</div>
        <div class="summary-wrapper">
            <SummaryPanel />
        </div>
        <div class="navigation-wrapper">
            <NavigationButton />
        </div>
    </div>
</template>

<script setup lang="ts">
import NavigationButton from './subItem/NavigationButton.vue';
import SummaryPanel from './subItem/SummaryPanel.vue';
import { PeriodType } from '@/const/config';

const PERIOD_TYPE = PeriodType.MONTHLY;

</script>

<style scoped lang="scss">
.finish-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 50px;
    width: 430px;
}

.title {
    font-size: 30px;
}

.summary-wrapper {
    width: 100%;
    margin-top: 25px;
}

.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
}
</style>