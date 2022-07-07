import React from "react";

export interface IBackdropProps {
    data?: IBackdropData;
    options?: IBackdropOptions;
    events?: IBackdropEvents;
}

interface IBackdropData {
    /**
     * @type {boolean}
     * toggle to see or hide backdrop
     */
    isVisible: boolean;
    /**
     * @type {React.ReactNode}
     * children to show in the 
     * center of backdrop
     */
    children?: React.ReactNode;
}

interface IBackdropOptions {
    /**
     * @type {string}
     * background color of backdrop
     */
    bgColor?: string;
    /**
     * @type {string}
     * color of backdrop
     */
    color?: string;
}

interface IBackdropEvents {
    /**
     * trigger an event if clicked 
     * on backdrop
     */
    onClick?:() => void;
}