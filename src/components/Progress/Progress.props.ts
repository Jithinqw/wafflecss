import React from "react";

export interface IProgressProps {
    data: IProgressData;
    events?: IProgressEvents;
}

interface IProgressData {
    /**
     * @type {string}
     */
    width: string;
    /**
     * @type {string}
     */
    color?: string;
    /**
     * @type {string}
     */
    height?: string;
    /**
     * @type {React.ReactNode}
     */
    children?: React.ReactNode;
    /**
     * @type {boolean}
     */
    enableStripe?: boolean;
    /**
     * @type {boolean}
     */
    animateStripe?: boolean;
    /**
     * @type {string}
     * 
     */
    id?: string;
    /**
     * @type {string}
     */
    className?: string;
}

interface IProgressEvents {
    /**
     * Trigger an event if click
     * on progress component
     */
    onClick?:() => void;
}