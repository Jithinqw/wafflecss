import React from "react";

export interface IProgressProps {
    data: IProgressData;
    events?: IProgressEvents;
}

interface IProgressData {
    width: string;
    color?: string;
    children?: React.ReactNode;
}

interface IProgressEvents {
    onClick?:() => void
}