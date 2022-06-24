import { ChangeEvent } from "react";

export interface ITextInputProps {
    data: ITextInputData;
    events?: ITextInputEvents;
    options?: ITextInputOptions;
}

interface ITextInputData {
    /**
     * Placeholder for input
     */
    placeholder?: string;
    /**
     * id of textinput
     */
    id?: string;
    /**
     * toggle disabled 
     */
    isDisabled?: boolean;
    /**
     * default value
     */
    value?: string;
    /**
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

interface ITextInputEvents {
    /**
     * @description handler for input value change
     * @param e {ChangeEvent}
     * @type {HTMLInputElement}
     * @returns void
     */
     onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
     /**
      * @description handler for key press event
      * @param oldValue {string}
      * @param e {React.MouseEvent<HTMLInputElement>}
      * @returns void
      */
     onKeyPress?: (oldValue: string, e:React.KeyboardEvent<HTMLInputElement>) => void;
     /**
      * @description handler for input blur event
      * @param currentValue {string}
      * @returns void
      */
     onBlur?: (currentValue: string) => void;
     /**
      * @description handler for focus event
      * @param currentValue {string}
      * @param e {React.FocusEvent}
      * @returns 
      */
     onFocus?:(currentValue: string, e: React.FocusEvent<HTMLInputElement>) => void;
}

interface ITextInputOptions {
    /**
     * Accessibility for input
     */
    accessibility?: string;
    /**
     * max length
     */
    maxLength?: number;
    /**
     * size for input
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * type of Input
     */
    type?: 'email' | 'text' | 'number' | 'password';
}
