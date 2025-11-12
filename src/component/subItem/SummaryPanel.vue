<template>
    <div class="summary-container">
        <h1 class="result-title">Receipt</h1>
        <div class="blue-bg-container">
            <div class="content-wrapper">
                <div class="product-area">
                    <div>
                        <p>{{ `${summary.selectedPlan.name}(${summary.periodType === PeriodType.MONTHLY ? 'mo' : 'yr'}`
                        }}
                        </p>
                    </div>
                    <p>{{ `$${summary.selectedPlan.price}/${summary.periodType === PeriodType.MONTHLY ? 'mo' : 'yr'}` }}
                    </p>
                </div>
                <div v-for="(addOns, index) in filteredAddOns" :key="index" class="add-ons-area">
                    <p>{{ addOns.title }}</p>
                    <p>+${{ addOns.price }}/mo</p>
                </div>
            </div>
        </div>
        <div class="total-area">
            <p>{{ `Total (per ${summary.periodType === PeriodType.MONTHLY ? 'month' : 'year'})` }}</p>
            <p>${{ summary.totalPrice }}/{{ `${summary.periodType === PeriodType.MONTHLY ? 'mo' : 'yr'}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PeriodType } from '@/const/config';
import type { PlanSummary } from '@/const/interface';

const props = defineProps<{
    summary: PlanSummary
}>()

const filteredAddOns = computed(() =>
    props.summary.selectedAddOns.filter(item => item.isSelected)
);
</script>

<style scoped lang="scss">
.summary-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
}

.result-title {
    font-size: 30px;
    margin-bottom: 10px;
}

.blue-bg-container {
    background-color: $blue-100;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
}

.product-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    padding-bottom: 15px;

    p {
        font-weight: bold;
        color: $blue-950;
    }

    a {
        font-size: 14px;
        color: $blue-300;
        text-decoration: underline;
        margin-left: 10px;
        cursor: pointer;
    }
}

.add-ons-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    p {
        color: $grey-500;
        font-size: 14px;
    }
}

.total-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 90%;

    p:first-child {
        color: $grey-500;
        font-size: 14px;
    }

    p:last-child {
        color: $purple-600;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>