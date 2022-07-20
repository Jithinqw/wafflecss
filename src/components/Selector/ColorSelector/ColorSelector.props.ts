import React from "react";

export interface IColorPickerProps {
    data: IColorPickerData,
    events?: IColorPickerEvents,
    options?: IColorPickerOptions
}

interface IColorPickerEvents {
    onClick?:() => void;
    onChange?:() => void;
}

interface IColorPickerData {
    selected: boolean;
    color?: string;
    accessability?: string;
}

interface IColorPickerOptions {
    disabled?: boolean;
    key?: number;
    colorSize?: 'sm' | 'md' | 'lg';
    borderColor?: string;
}