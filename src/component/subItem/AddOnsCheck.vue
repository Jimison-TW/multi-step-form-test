<template>
    <div class="check-container" :class="{ 'is-checked': checked }">
        <div class="checkbox-wrapper">
            <el-checkbox v-model="checked" size="large" @change="checked" />
        </div>
        <div class="content-wrapper">
            <p>{{ option.title }}</p>
            <p>{{ option.desc }}</p>
        </div>
        <div class="price-wrapper">
            <p>{{ `+$${option.price}/${isMonthly ? 'mo' : 'yr'}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';
import { ref, watch } from 'vue';

const props = defineProps<{
    periodType: PeriodType,
    option: {
        title: string,
        desc: string,
        price: number
    }
}>();
const emit = defineEmits<{
    (e: 'update:checked', value: boolean): void;
}>()
const checked = ref(false);
const isMonthly = ref(props.periodType === PeriodType.MONTHLY);

watch(
    () => props.periodType,
    (newVal) => {
        isMonthly.value = newVal === PeriodType.MONTHLY;
    },
    { immediate: true }
);
watch(checked, (val) => {
    emit('update:checked', val);
})
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

    &.is-checked {
        background-color: $blue-100;
        border-color: $blue-300;
    }
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