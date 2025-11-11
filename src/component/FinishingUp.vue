<template>
    <div class="finish-container">
        <div class="summary-wrapper">
            <div class="summary-container">
                <div class="blue-bg-container">
                    <div class="content-wrapper">
                        <div class="product-area">
                            <div>
                                <p>{{ `${summary.selectedPlan.name}(${summary.periodType === PeriodType.MONTHLY ?
                                    'Monthly' :
                                    'Yearly'})` }}</p>
                                <a href="#">Change</a>
                            </div>
                            <p>{{ `$${summary.selectedPlan.price}/${priceUnit}` }}</p>
                        </div>
                        <div v-if="summary.selectedAddOns.length === 0" class="add-ons-area">no add-ons</div>
                        <div v-if="summary.selectedAddOns.length !== 0"
                            v-for="(addOns, index) in summary.selectedAddOns" :key="index" class="add-ons-area">
                            <p>{{ addOns.title }}</p>
                            <p>+${{ addOns.price }}/mo</p>
                        </div>
                    </div>
                </div>
                <div class="total-area">
                    <p>Total (per month)</p>
                    <p>{{ `$${summary.totalPrice}/${priceUnit}` }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';
import type { AddOnsItem, PlanItem } from '@/const/interface';
import { computed } from 'vue';

const props = defineProps<{
    summary: {
        periodType: PeriodType,
        selectedPlan: PlanItem,
        selectedAddOns: Array<AddOnsItem>
        totalPrice: number
    }
}>()

const priceUnit = computed(() => props.summary.periodType === PeriodType.MONTHLY ? 'mo' : 'yr')
</script>

<style scoped lang="scss">
.finish-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.summary-wrapper {
    width: 100%;
    margin-top: 25px;
}

.summary-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.blue-bg-container {
    background-color: $blue-100;
    width: 100%;
    height: auto;
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

.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
}
</style>