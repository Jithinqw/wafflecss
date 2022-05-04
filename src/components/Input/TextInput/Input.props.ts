import { ChangeEvent, CSSProperties } from "react";
import { TextInputStyle } from "../../../models/Text";
import styles from './TextInput.module.scss';

export interface ITextInputProps {
    data: ITextInputData;
    events?: ITextInputEvents;
    options?: ITextInputOptions;
}

interface ITextInputData {
    /**
     * place holder text for input element
     */
    placeholder?: string;
    /**
     * boolean toggle for disabling input 
     */
    isDisabled?: boolean;
    /**
     * value to be shown in input
     */
    value: string;
    /**
     * input name
     */
    name?: string;
    /**
     * type of input
     * @type {email | text | number | password}
     * defaults to text if not passed
     */
    type?: 'email' | 'text' | 'number' | 'password';
    /**
     * id for textInput
     */
    id?: string;
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
     * type of text input style
     * defaults to MD if not passed
     * @type {sm | lg | md | xs}
     */
    textInputType?: TextInputStyle;
    /**
     * exta styles to be attached
     */
    style?: CSSProperties;
    /**
     * toggle to check if input is optional
     */
    inputOmit?: boolean;
    /**
     * is input value readonly
     */
    isReadOnly?: boolean;
    /**
     * accessibility token for input
     */
    accessibility?: string;
    /**
     * restrict length
     */
    maxLength?: number;
}

export const InputTextSizeMap = new Map<TextInputStyle, string>([
    [TextInputStyle.XS, styles.textXs],
    [TextInputStyle.SM, styles.textSm],
    [TextInputStyle.MD, styles.textMd],
    [TextInputStyle.LG, styles.textLg],
]);