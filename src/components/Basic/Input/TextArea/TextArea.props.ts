import { ChangeEvent } from "react";

export interface ITextAreaProps {
    data: ITextAreaData,
    events?: ITextAreaEvents,
    options?: ITextAreaOptions
}

interface ITextAreaEvents {
    /**
     * onChange events to be attached to text area
     */
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * onKeyPress events to be attached
     */
    onKeyPress?: (oldValue: string, e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * onBlur event to be attached
     */
    onBlur?: (currentValue: string) => void;
    /**
     * onFocus event to be attached
     */
    onFocus?: (currentValue: string, e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

interface ITextAreaData {
    /**
     * placeholder text to be shown.
     * defaults to ```Please add content here```
     */
    placeholderText?: string;
    /**
     * control disabled bool value
     */
    isDisabled?: boolean;
    /**
     * value to hold text area value.
     * This is non-optional prop
     */
    value: string;
    /**
     * name of the text area, For XPATH: 
     */
    name?: string;
    /**
     * ID of the text area
     */
    id?: string;
    /**
     * row to control the size.
     * @default 4
     */
    rows?: number;
    /**
     * columns to control the size
     * @default 50
     */
    cols?: number;
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

interface ITextAreaOptions {
    /**
     * control is readyonly value
     */
    isReadonly?: boolean;
    /**
     * accessibility attacher
     */
    accessibility?: string;
    /**
     * control max length of the text area
     */
    maxLength?: string;
    /**
     * control required props
     */
    isRequired?: boolean;
    /**
     * @type {string}
     */
     className?: string;
}