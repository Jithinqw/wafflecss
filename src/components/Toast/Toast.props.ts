import React from "react";

export interface IToastProps {
    data: IToastData;
    events?: IToastEvents;
}

interface IToastData {
    showToast?: boolean;
    toastHeadNode?: React.ReactNode;
    toastHeadTextNode?: React.ReactNode;
    displayText: string;
    delay?: number;
}

interface IToastEvents {
    onDismiss?: () => void;
}