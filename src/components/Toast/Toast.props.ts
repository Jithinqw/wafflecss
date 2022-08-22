import React from "react";

export interface IToastProps {
    data: IToastData;
    events?: IToastEvents;
}

interface IToastData {
    /**
     * @type {boolean}
     */
    showToast?: boolean;
    /**
     * @type {React.ReactNode}
     */
    toastHeadNode?: React.ReactNode | string;
    /**
     * @type {React.ReactNode}
     */
    toastHeadTextNode?: React.ReactNode | string;
    /**
     * @type {string}
     */
    displayText: string | React.ReactNode;
    /**
     * @type {number}
     */
    delay?: number;
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {string}
     */
    className?: string;
}

interface IToastEvents {
    /**
     * trigger an event 
     * on dismiss
     */
    onDismiss?: () => void;
}