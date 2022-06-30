import React from "react";

export interface IProgressProps {
    data: IProgressData;
    events?: IProgressEvents;
}

interface IProgressData {
    width: string;
    color?: string;
    height?: string;
    children?: React.ReactNode;
    enableStripe?: boolean;
    animateStripe?: boolean;
}

interface IProgressEvents {
    onClick?:() => void
}