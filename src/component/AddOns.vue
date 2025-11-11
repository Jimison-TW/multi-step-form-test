<template>
    <div class="add-ons-container">
        <div class="check-wrapper">
            <AddOnsCheck v-model:checked="AddOnsOptions[index]!.isSelected" v-for="(option, index) in AddOnsOptions"
                :key="index" :option="option" :period-type="props.periodType" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AddOnsCheck from './subItem/AddOnsCheck.vue';
import { PeriodType } from '@/const/config';
import { type AddOnsItem } from '@/const/interface';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    periodType: PeriodType
}>()
const emit = defineEmits<{
    (e: 'update:selectedAddOns', value: Array<AddOnsItem>): void;
}>()

const monthPrices = [1, 2, 2];
const titles = ['Online service', 'Larger storage', 'Customizable profile']
const descs = ['Access to multiplayer games', 'Extra 1TB of cloud save', 'Custom theme on your profile']

const AddOnsOptions = ref<AddOnsItem[]>(
    monthPrices.map((monthPrice, index) => ({
        isSelected: false,
        title: titles[index]!,
        desc: descs[index]!,
        price: props.periodType === PeriodType.MONTHLY ? monthPrice : monthPrice * 10
    }))
)

watch(AddOnsOptions, (val) => {
    emit('update:selectedAddOns', val)
}, { deep: true });

watch(() => props.periodType, (newType) => {
    AddOnsOptions.value.forEach((item, i) => {
        item.price = newType === PeriodType.MONTHLY ? monthPrices[i]! : monthPrices[i]! * 10
    })
})

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