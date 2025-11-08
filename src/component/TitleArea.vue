<template>
    <div class="plan-container">
        <h1 class="title">{{ titleArea.title }}</h1>
        <div>{{ titleArea.description }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    titleArea: {
        title: string;
        description: string;
    }
}>()
</script>

<style scoped lang="scss">
.title {
    font-size: 30px;
}
</style>