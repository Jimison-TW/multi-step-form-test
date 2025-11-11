<template>
    <div class="add-ons-container">
        <div class="check-wrapper">
            <AddOnsCheck v-model:checked="selectedAddOns[index]" v-for="(option, index) in AddOnsOptions" :key="index"
                :option="option" :period-type="props.periodType" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AddOnsCheck from './subItem/AddOnsCheck.vue';
import { PeriodType } from '@/const/config';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    periodType: PeriodType
}>()
const emit = defineEmits<{
    (e: 'update:selectedAddOns', value: Array<boolean>): void;
}>()

const AddOnsOptions = computed(() => [
    { title: 'Online service', desc: 'Access to mullidlaver dames', price: props.periodType === PeriodType.MONTHLY ? 1 : 10 },
    { title: 'Larger storage', desc: 'Extra 1TB of cloud save', price: props.periodType === PeriodType.MONTHLY ? 2 : 20 },
    { title: 'Customizable profile', desc: 'Custom theme on your profile', price: props.periodType === PeriodType.MONTHLY ? 2 : 20 }
])
const selectedAddOns = ref([false, false, false]);

watch(selectedAddOns, (val) => {
    emit('update:selectedAddOns', val)
}, { deep: true });

</script>

<style scoped lang="scss">
.add-ons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.title {
    font-size: 30px;
}

.check-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
}

.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
}
</style>