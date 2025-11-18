<template>
    <div class="thank-you-container">
        <div class="icon" :style="{ backgroundImage: `url(src/assets/images/icon-thank-you.svg)` }"></div>
        <p class="title">Thank you!</p>
        <span class="content">Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel
            free to email us at support@loremgaming.com</span>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.thank-you-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 80px;
    height: 80px;
}

.title {
    margin-top: 25px;
    margin-bottom: 10px;
    color: $blue-950;
    font-size: 30px;
    font-weight: 900;
}

.content {
    text-align: center;
}

@media (max-width: 767px) {
    .thank-you-container {
        background-color: $white;
        padding: 30px;
        border-radius: 15px;
    }
}
</style>