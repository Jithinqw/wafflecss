import React from "react";

export interface IPromotionalRibbonProps {
    data: IPromotionalRibbonData;
    options?: IPromotionalRibbonOptions;
    events?: IPromotionalRibbonEvents;
}

interface IPromotionalRibbonData {
    /**
     * @type {React.ReactNode}
     */
    children?: React.ReactNode;
}

interface IPromotionalRibbonEvents {
    /**
     * trigger onClick
     */
    onClick?:() => void;
}

interface IPromotionalRibbonOptions {
    /**
     * @type {string}
     * Color for promotion
     */
    position?: 'left' | 'right';
    /**
     * @type {string}
     * Color for promotion
     */
    color?: string;
    /**
     * @type {string}
     * backgroundColor for promotion
     */
    backgroundColor?: string;
}