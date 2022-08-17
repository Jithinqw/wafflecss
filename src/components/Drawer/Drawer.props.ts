import React from "react";

export interface IDrawerProps {
    data: IDrawerData;
    options?: IDrawerOptions;
    events?: IDrawerEvents;
}

interface IDrawerData {
    /**
     * @type {boolean}
     * toggle drawer visibility
     */
    isVisible: boolean;
    /**
     * @type {React.ReactNode}
     * React children for rendering
     * inside drawer.
     */
    children: React.ReactNode;
}

interface IDrawerEvents {
    /**
     * @todo
     */
    onDismiss?:() => void;
}

interface IDrawerOptions {
    /**
     * @type {string}
     * background color for 
     * drawer
     */
    bgColor?: string;
    /**
     * @type {string}
     * control total width of 
     * sidebar, drawer
     */
    width?: string;
    /**
     * @type {string}
     * control border radius 
     * of drawer
     */
    borderRadius?: string;
    /**
     * @type {'left' | 'right'}
     * control position of drawer
     */
    position?: 'left' | 'right';
}