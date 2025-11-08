<template>
    <div class="button-container">
        <button class="back" :class="{ invisible: currentStep === 1 }" @click="$emit('prev')">Go
            Back</button>
        <button v-if="currentStep < 4" class="next" @click="$emit('next')">Next Step</button>
        <button v-if="currentStep === 4" class="confirm" @click="$emit('submit')">
            Confirm
        </button>

    </div>
</template>

<script setup lang="ts">
defineProps<{ currentStep: number }>();
const emit = defineEmits<{
    (e: 'next'): void;
    (e: 'prev'): void;
    (e: 'submit'): void;
}>();
</script>

<style scoped lang="scss">
.button-container {
    display: flex;
    justify-content: space-between;
}

.back {
    background-color: $blue-50;
    width: 120px;
    height: 45px;
    border-radius: 8px;
    color: $grey-500;
}

.invisible {
    visibility: hidden;
}

.next {
    background-color: $blue-950;
    width: 120px;
    height: 45px;
    border-radius: 8px;
}

.confirm {
    background-color: $purple-600;
    width: 120px;
    height: 45px;
    border-radius: 8px;
}
</style>