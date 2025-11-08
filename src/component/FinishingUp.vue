<template>
    <div class="finish-container">
        <div class="summary-wrapper">
            <div class="summary-container">
                <div class="blue-bg-container">
                    <div class="content-wrapper">
                        <div class="product-area">
                            <div>
                                <p>{{ `${productName}(${periodType})` }}</p>
                                <a href="#">Change</a>
                            </div>
                            <p>$9/mo</p>
                        </div>
                        <div v-for="(addOns, index) in addOnsSelection" :key="index" class="add-ons-area">
                            <p>{{ addOns.title }}</p>
                            <p>+${{ addOns.price }}/mo</p>
                        </div>
                    </div>
                </div>
                <div class="total-area">
                    <p>Total (per month)</p>
                    <p>$12/mo</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';

let productName = 'Arcade';
let periodType = 'Monthly';

const addOnsSelection = [
    { title: 'Online service', price: 1 },
    { title: 'Larger storage', price: 2 },
];

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

.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
}
</style>