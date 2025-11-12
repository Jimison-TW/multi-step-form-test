import type { PeriodType } from "./config";

export interface PlanItem {
    name: string,
    price: number
}

export interface AddOnsItem {
    isSelected: boolean;
    title: string;
    desc: string;
    price: number;
}

export interface PlanSummary {
    periodType: PeriodType;
    selectedPlan: PlanItem;
    selectedAddOns: AddOnsItem[];
    totalPrice: number;
};
