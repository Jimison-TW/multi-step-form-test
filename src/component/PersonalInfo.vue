<template>
    <div class="info-container">
        <div class="title-container">
            <h2 class="title">Name</h2>
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>
        <input type="text" v-model="form.name" placeholder="e.g. Stephen King" @blur="validateName" />
        <div class="title-container">
            <h2 class="title">Email Address</h2>
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>
        <input type="text" v-model="form.email" placeholder="e.g. stephenking@lorem.com" @blur="validateEmail" />
        <div class="title-container">
            <h2 class="title">Phone Number</h2>
            <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
        </div>
        <input type="text" v-model="form.phone" placeholder="e.g. +1 234 567 890" @blur="validatePhone" />
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
const props = defineProps<{
    modelValue: {
        name: string
        email: string
        phone: string
    }
}>()
const emit = defineEmits(['update:modelValue'])

const form = reactive({ ...props.modelValue })
const errors = reactive({
    name: '',
    email: '',
    phone: ''
})

watch(form, (newVal) => {
    emit('update:modelValue', newVal)
}, { deep: true })

// === 驗證函式 ===
const validateName = () => {
    errors.name = form.name.trim() ? '' : 'Name is required.'
}
const validateEmail = () => {
    if (!form.email.trim()) {
        errors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Invalid email format.'
    } else {
        errors.email = ''
    }
}
const validatePhone = () => {
    errors.phone = form.phone.trim() ? '' : 'Phone number is required.'
}
const validateAll = () => {
    validateName()
    validateEmail()
    validatePhone()
    // 回傳是否全部通過
    return !errors.name && !errors.email && !errors.phone
}
defineExpose({ validateAll })
</script>

<style scoped lang="scss">
.info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    h2,
    p {
        margin: 0 0 5px 0;
    }
}

.info-title {
    font-size: 30px;
}

.main-title {
    font-size: xx-large;
}

.title {
    font-weight: 400;
    margin-top: 20px;
}

input {
    width: 100%;
}

.error {
    color: red;
    font-size: 0.85rem;
    margin-top: 4px;
}
</style>