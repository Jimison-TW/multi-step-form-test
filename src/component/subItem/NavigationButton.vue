<template>
    <div class="button-container">
        <button class="back">Go Back</button>
        <button class="next">Next Step</button>
    </div>
</template>

<script setup lang="ts"></script>

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

.next {
    background-color: $blue-950;
    width: 120px;
    height: 45px;
    border-radius: 8px;
}
</style>