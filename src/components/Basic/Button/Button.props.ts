import React from "react";
import { IStyleOptions } from "../../../models/defaultStyle";

export interface IButtonProps {
    data: IButtonData;
    events?: IButtonEvents;
    options?: IButtonOptions
}

interface IButtonData {
    /**
     * @type {string}
     * Button display text
     */
    displayText: string | React.ReactNode;
    /**
     * @type {string}
     * Id for your button
     */
    id?: string;
    /**
     * @type {boolean}
     * Toggle button disable
     */
    isDisabled?: boolean;
    /**
     * @type {string}
     * Customize border-radius 
     */
    radius?: string;
    /**
     * @type {string}
     * Customise button width
     */
    width?: string;
}

interface IButtonEvents {
    /**
     * @function 
     * What should happen if user click 
     * on button
     */
    onClick?:() => void;
    /**
     * @function
     * What should happen if user
     * focus on button, eg: trigger
     * an screen reader functions etc.
     */
    onFocus?:() => void;
}

interface IButtonOptions {
    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     * Manage Button size
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * @type {'button' | 'submit' | 'reset'}
     * What type of button
     */
    buttonType?: 'button' | 'submit' | 'reset';
    /**
     * @type {'default' | 'danger' | 'success' | 'primary'}
     * What is the behaviour of button
     */
    variants?: 'default' | 'danger' | 'success' | 'primary';
    /**
     * additional styles
     * @type {IStyleOptions}
     */
    style?: IStyleOptions;
    /**
     * @type {string}
     * additional styles passed
     */
    className?: string;
}