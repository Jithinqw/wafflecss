import React from 'react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextInputStyle } from '../../../models/Text';
import { InputTextSizeMap, ITextInputProps } from './Input.props';

/**
 * @function TextInput
 * @description TextInput component
 * @param props {ITextInputProps}
 * @returns {ReactNode.Node}
 * @todo Make error API.
 */
const TextInput = (props: ITextInputProps) => {
    const [currentText, setCurrentText] = useState<string>('');

    /**
     * @function getInputTextSizeStyle
     * @description Get input size
     * @returns {string}
     */
    const getInputTextSizeStyle = () => {
        return InputTextSizeMap.get(
            props?.options?.textInputType ? props?.options?.textInputType : TextInputStyle.MD
        );
    }

    /**
     * @function onChange
     * @description change handler for input
     * @param e {changeEvent}
     */
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.currentTarget.value);
        if(props?.events?.onChange) {
            props.events.onChange(e)
        }
    }

    /**
     * @function onBlur
     * @description onBlur change handler for input
     */
    const onBlur = () => {
        if(props?.events?.onBlur) {
            props.events.onBlur(currentText);
        }
    }

    /**
     * @function onKeyPress
     * @param event {KeyboardEvent<HTMLInputElement>}
     * @description onKeyPress handler for input
     */
    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if(props?.events?.onKeyPress) {
            props?.events?.onKeyPress(currentText, event);
        }
    }

    /**
     * @function onFocus
     * @param event {React.FocusEvent<HTMLInputElement>}
     * @description onFocus handler for input
     */
    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if(props?.events?.onFocus) {
            props.events.onFocus(currentText, event)
        }
    }

    return (
        <>
            <input 
                id={props?.data?.id}
                disabled={props?.data?.isDisabled ? props?.data?.isDisabled : false}
                className={getInputTextSizeStyle()}
                value={props?.data?.value}
                name={props?.data?.name}
                aria-label={props?.options?.accessibility}
                required={props?.options?.inputOmit ? props?.options?.inputOmit : false}
                type={props.data?.type ? props.data?.type : 'text'}
                readOnly={props?.options?.isReadOnly ? props?.options?.isReadOnly : false}
                placeholder={props?.data?.placeholder ? props?.data?.placeholder : ''}
                style={props?.options?.style}
                onChange={onChange}
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus = {onFocus}
            />
        </>
    )
}

export default TextInput;