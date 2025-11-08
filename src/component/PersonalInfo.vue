<template>
    <div class="info-container">
        <h2 class="title">Name</h2>
        <input type="text" placeholder="e.g. Stephen King" />
        <h2 class="title">Email Address</h2>
        <input type="text" placeholder="e.g. stephenking@lorem.com" />
        <h2 class="title">Phone Number</h2>
        <input type="text" placeholder="e.g. +1 234 567 890" />
    </div>
</template>

<style scoped lang="scss">
.info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
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

.button-wrapper {
    margin-top: auto;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

button {
    background-color: $blue-950;
    width: 120px;
    height: 45px;
    border-radius: 8px;
}
</style>