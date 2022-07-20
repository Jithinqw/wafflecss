import { ChangeEvent } from "react";

export interface IPinInputProps {
    data: IPinInputData;
    options?: IPinInputOptions;
    events?: IPinInputEvents;
}

interface IPinInputData {
    /**
     * @type {string}
     * Placeholder for input
     */
    placeholder?: string;
    /**
     * @type {string}
     * id of textinput
     */
    id?: string;
    /**
     * @type {boolean}
     * toggle disabled 
     */
    isDisabled?: boolean;
    /**
     * @type {string}
     * default value
     */
    value?: string;
    /**
     * @type {string}
     * Name of text input
     */
    name?: string;
    /**
     * @type {boolean}
     * Display error border
     * if 
     */
    isError?: boolean;
    /**
     * @type {string}
     * Color of border if
     * error is true
     */
    errorBorderColor?: string;
}

interface IPinInputEvents {
    /**
     * @description handler for input value change
     * @param e {ChangeEvent}
     * @type {HTMLInputElement}
     * @returns void
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
      * @description handler for focus event
      * @param currentValue {string}
      * @param e {React.FocusEvent}
      * @returns 
    */
    onFocus?:() => void;
}

interface IPinInputOptions {
    /**
     * Accessibility for input
     */
    accessibility?: string;
    /**
     * size for input
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
