<template>
    <div class="popup-overlay" @click="closePopup">
        <div class="popup-container" @click.stop>
            <SideBar :current-step="currentStep" />
            <div v-if="!isConfirmBuy" class="content-container">
                <TitleArea :current-step="currentStep" />
                <PersonalInfo v-model="personalInfo" v-show="currentStep === 1" ref="infoRef" />
                <SelectPlan v-model:periodType="periodType" v-model:selectedPlan="selectedPlan"
                    v-show="currentStep === 2" />
                <AddOns v-model:selectedAddOns="selectedAddOns" v-show="currentStep === 3" :period-type="periodType" />
                <FinishingUp v-show="currentStep === 4" :summary="planSummary" />
                <div class="navigation-wrapper">
                    <NavigationButton :current-step="currentStep" @next="nextStep" @prev="prevStep"
                        @submit="confirmBuy" />
                </div>
            </div>
            <div v-if="isConfirmBuy" class="thank-you-wrapper">
                <ThankYou />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '../component/SideBar.vue';
import TitleArea from '@/component/TitleArea.vue';
import PersonalInfo from '../component/PersonalInfo.vue';
import SelectPlan from '../component/SelectPlan.vue';
import AddOns from '../component/AddOns.vue';
import FinishingUp from '../component/FinishingUp.vue';
import NavigationButton from '@/component/subItem/NavigationButton.vue';
import ThankYou from '@/component/ThankYou.vue';
import { ref, computed } from 'vue';
import { PeriodType } from '@/const/config';
import type { AddOnsItem, PlanItem } from '@/const/interface';

const currentStep = ref(1);
const personalInfo = ref({
    name: '',
    email: '',
    phone: ''
})
const infoRef = ref()
const periodType = ref<PeriodType>(PeriodType.MONTHLY)
const selectedPlan = ref<PlanItem>({ name: 'Arcade', price: 9 })
const selectedAddOns = ref<AddOnsItem[]>([]);
const isConfirmBuy = ref(false)

const planSummary = computed(() => {
    const totalAddOnsPrice = selectedAddOns.value.reduce((sum, item) => sum + item.price, 0);
    return {
        periodType: periodType.value,
        selectedPlan: selectedPlan.value,
        selectedAddOns: selectedAddOns.value,
        totalPrice: selectedPlan.value.price + totalAddOnsPrice
    };
});

const emit = defineEmits<{
    (e: 'update'): void;
    (e: 'close'): void;
}>()

const nextStep = () => {
    const isValid = infoRef.value.validateAll()
    if (!isValid) {
        console.log('驗證未通過')
        return
    }
    if (currentStep.value < 4) currentStep.value++;
};
const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};
const confirmBuy = () => {
    isConfirmBuy.value = true
}
const closePopup = () => {
    emit('close');
};
</script>

<style scoped lang="scss">
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}


.popup-container {
    display: flex;
    flex-direction: row;
    background-color: $blue-100;
    padding: 20px;
    border-radius: 10px;
}

.content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 50px;
    width: 430px;
}

.navigation-wrapper {
    width: 100%;
    margin-top: auto;
    margin-bottom: 30px;
}

.thank-you-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>