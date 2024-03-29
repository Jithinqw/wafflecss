import React from "react";

export interface ILinkButtonProps {
    data: ILinkButtonData;
    events?: ILinkButtonEvents;
    options?: ILinkButtonOptions;
}

interface ILinkButtonData {
    /**
     * @type {string}
     * Display text for button
     */
    displayText: string | React.ReactNode;
}

interface ILinkButtonEvents {
    /**
     * @function onClick
     * A callback if a button
     * is clicked
     */
    onClick?:() => void;
    /**
     * @function onFocus
     * * A callback if a button
     * is focused
     */
    onFocus?:() => void;
    /**
     * @function onKeyDown
     * A callback if a enter
     * is clicked
     */
    onKeyDown?: () => void;
}

interface ILinkButtonOptions {
    /**
     * @type {string}
     * Size for button
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     * id for button
     */
    id?: string;
    /**
     * additional styles passed
     */
    className?: string;
}
