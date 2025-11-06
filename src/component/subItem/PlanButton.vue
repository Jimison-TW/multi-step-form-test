<template>
    <div class="btn-container">
        <div class="content-wrapper">
            <div class="icon" :style="{ backgroundImage: `url(${plan.iconPath})` }"></div>
            <div>{{ plan.name }}</div>
            <div>${{ plan.monthlyPrice }}/mo</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    plan: {
        name: string,
        monthlyPrice: number,
        yearlyPrice: number,
        iconPath: string
    }
}>();
</script>

<style scoped lang="scss">
.btn-container {
    width: 130px;
    height: 150px;
    border: 2px solid;
    border-radius: 10px;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 15px;
}

.icon {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 30px;
}
</style>