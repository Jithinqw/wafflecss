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
    toastHeadNode?: React.ReactNode;
    /**
     * @type {React.ReactNode}
     */
    toastHeadTextNode?: React.ReactNode;
    /**
     * @type {string}
     */
    displayText: string;
    /**
     * @type {number}
     */
    delay?: number;
}

interface IToastEvents {
    /**
     * trigger an event 
     * on dismiss
     */
    onDismiss?: () => void;
}