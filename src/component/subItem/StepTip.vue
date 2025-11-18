<template>
    <div class="tip-container">
        <div class="tip-icon" :class="{ active: isActive }">{{ step.number }}</div>
        <div class="tip-content">
            <div class="tip-title">{{ step.title }}</div>
            <div class="tip-desc">{{ step.desc }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    isActive: boolean;
    step: {
        number: number;
        title: string;
        desc: string;
    }
}>();
</script>

<style scoped lang="scss">
.tip-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.tip-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    text-transform: uppercase;
}

.tip-icon {
    width: 40px; // 圓形寬度
    height: 40px; // 圓形高度
    color: $white; // 文字顏色
    border-radius: 50%; // 讓方形變圓
    background: $purple-600; // 圓形顏色
    border: $white 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tip-icon.active {
    border: $blue-200 2px solid;
    background-color: $blue-200;
    color: $blue-950;
    font-weight: bold;
}

.tip-title {
    display: inline;
}

.tip-desc {
    display: inline;
    color: $blue-50;
}

@media (max-width:767px) {
    .tip-content {
        display: none;
    }
}
</style>