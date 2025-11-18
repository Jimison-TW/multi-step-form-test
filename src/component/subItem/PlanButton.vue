<template>
    <div class="btn-container" role="button" :class="{ active: selected }" @click="toggleActive">
        <div class="content-wrapper">
            <div class="icon" :style="{ backgroundImage: `url(${plan.iconPath})` }"></div>
            <div class="text-container">
                <div class="plan-name">{{ plan.name }}</div>
                <div class="monthly-price" v-show="periodType === PeriodType.MONTHLY">${{ plan.monthlyPrice }}/mo</div>
                <div class="yearly-price" v-show="periodType === PeriodType.YEARLY">${{ plan.yearlyPrice }}/yr</div>
                <div class="yearly-bonus" v-show="periodType === PeriodType.YEARLY">2 months free</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PeriodType } from '@/const/config';
import { ref, watch } from 'vue';

const props = defineProps<{
    plan: {
        name: string,
        monthlyPrice: number,
        yearlyPrice: number,
        iconPath: string,
    },
    selected: boolean,
    periodType: PeriodType
}>();
const emit = defineEmits(['click']);

const toggleActive = () => {
    emit('click');
}
</script>

<style scoped lang="scss">
.btn-container {
    width: 130px;
    height: auto;
    border: 2px solid;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    /* 動畫過渡 */

    &:hover {
        border-color: $blue-300;
    }

    &.active {
        background-color: $blue-100;
        border-color: $blue-300;
    }
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 15px;
}

.icon {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: contain;
}

.text-container {
    margin-top: 30px;
}

.plan-name {
    font-weight: 500;
    color: $blue-950;
}

.monthly-price,
.yearly-price {
    font-size: 14px;
}

.yearly-bonus {
    font-size: 12px;
    color: $blue-950;
}

@media (max-width:767px) {
    .btn-container {
        width: 100%;
    }

    .content-wrapper {
        flex-direction: row;
        justify-content: flex-start;
    }

    .icon {
        width: 50px;
        height: 50px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        margin: 0;
        margin-left: 15px;
    }

    .plan-name {
        font-weight: 500;
        font-size: 18px;
    }
}
</style>