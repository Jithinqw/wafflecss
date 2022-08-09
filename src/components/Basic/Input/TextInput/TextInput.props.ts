import { ChangeEvent } from "react";

export interface ITextInputProps {
    data: ITextInputData;
    events?: ITextInputEvents;
    options?: ITextInputOptions;
}

interface ITextInputData {
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

interface ITextInputEvents {
    /**
     * @description handler for input value change
     * @param {ChangeEvent} e
     * @type {HTMLInputElement}
     * @returns {void}
     */
     onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
     /**
      * @description handler for key press event
      * @param {string} oldValue
      * @param {React.MouseEvent<HTMLInputElement>} e
      * @returns {void}
      */
     onKeyPress?: (oldValue: string, e:React.KeyboardEvent<HTMLInputElement>) => void;
     /**
      * @description handler for input blur event
      * @param {string} currentValue
      * @returns {void}
      */
     onBlur?: (currentValue: string) => void;
     /**
      * @description handler for focus event
      * @param {string} currentValue
      * @param {React.FocusEvent} e
      * @returns {void}
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
    /**
     * @type {string}
     */
    className?: string;
}
