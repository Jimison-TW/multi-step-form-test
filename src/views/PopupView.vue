<template>
    <div class="popup-container">
        <SideBar />
        <div class="content-container">
            <TitleArea
                :title-area="{ title: 'Personal info', description: 'Please provide your name, email address, and phone number.' }" />
            <PersonalInfo v-show="currentStep === 1" />
            <SelectPlan v-show="currentStep === 2" />
            <AddOns v-show="currentStep === 3" />
            <FinishingUp v-show="currentStep === 4" />
            <div class="navigation-wrapper">
                <NavigationButton />
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
import { ref } from 'vue';

const currentStep = ref(4);

const nextStep = () => {
    if (currentStep.value < 4) currentStep.value++;
};
const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};
</script>

<style scoped>
.popup-container {
    display: flex;
    flex-direction: row;
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
</style>