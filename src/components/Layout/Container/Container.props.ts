import React from "react";

export interface IContainerProps {
    data: IContainerData;
    options?: IContainerOptions;
    events?: IContainerEvents;
}

interface IContainerData {
    children?: string | React.ReactNode;
}

interface IContainerOptions {
    size?: 'sm' | 'md' | 'lg';
    backgroundColor?: string;
}

interface IContainerEvents {
    onClick?:() => void;
}