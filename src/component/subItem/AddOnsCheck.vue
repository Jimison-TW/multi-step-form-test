<template>
    <div class="check-container">
        <div class="checkbox-wrapper">
            <el-checkbox size="large" />
        </div>
        <div class="content-wrapper">
            <p>{{ option.title }}</p>
            <p>{{ option.desc }}</p>
        </div>
        <div class="price-wrapper">
            <p>{{ `+$${option.price}/${periodType ? 'mo' : 'yr'}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PeriodType } from '@/const/config';

defineProps<{
    periodType: PeriodType,
    option: {
        title: string,
        desc: string,
        price: number
    }
}>();
</script>

<style scoped lang="scss">
.check-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    border-color: black;
    border: 1px solid;
    height: 80px;
}

.checkbox-wrapper {
    margin-left: 15px;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    flex-grow: 1;

    p:first-child {
        font-weight: bold;
        color: $blue-950;
    }

    p:last-child {
        color: $grey-500;
        font-size: 14px;
    }
}

.price-wrapper {
    margin-right: 15px;
    color: $blue-300;
}
</style>