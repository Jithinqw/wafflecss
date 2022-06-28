import React from "react";

export interface IBackdropProps {
    data?: IBackdropData;
    options?: IBackdropOptions;
    events?: IBackdropEvents;
}

interface IBackdropData {
    isVisible: boolean;
    children?: React.ReactNode;
}

interface IBackdropOptions {
    bgColor?: string;
    color?: string;
}

interface IBackdropEvents {
    onClick?:() => void;
}