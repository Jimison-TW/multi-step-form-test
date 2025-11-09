<template>
    <div class="plan-container">
        <h1 class="title">{{ TITLE_CONTENT[currentStep - 1]?.title }}</h1>
        <div>{{ TITLE_CONTENT[currentStep - 1]?.description }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    currentStep: number
}>()

const TITLE_CONTENT = [
    {
        title: 'Personal info',
        description: 'Please provide your name, email address, and phone number.'
    },
    {
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.'
    },
    {
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.'
    },
    {
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.'
    }
]
</script>

<style scoped lang="scss">
.title {
    font-size: 30px;
}
</style>