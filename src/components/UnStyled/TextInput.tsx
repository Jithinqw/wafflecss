import React, { ChangeEvent, KeyboardEvent, useEffect } from "react";
import { ITextInputProps } from "../Basic/Input/TextInput/TextInput.props";

const UnstyledTextInput = (props: ITextInputProps) => {

    const [currentText, setCurrentText] = React.useState<string>('');

    useEffect(() => {
        const value = props.data.value ? props.data.value : ''
        setCurrentText(value)
    },[]);
    
    /**
     * @function onChange
     * @description change handler for input
     * @param {changeEvent} e
     */
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.currentTarget.value);
        if(props?.events?.onChange) {
            props.events.onChange(e);
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
     * @param {KeyboardEvent<HTMLInputElement>} event
     * @description onKeyPress handler for input
     */
    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if(props?.events?.onKeyPress) {
            props?.events?.onKeyPress(currentText, event);
        }
    }

    /**
     * @function onFocus
     * @param {React.FocusEvent<HTMLInputElement>} event
     * @description onFocus handler for input
     */
    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if(props?.events?.onFocus) {
            props.events.onFocus(currentText, event)
        }
    }

    return (
        <input 
            placeholder={props.data?.placeholder}
            id={props.data?.id}
            name={props.data?.name}
            disabled={props.data?.isDisabled ? props.data?.isDisabled : false}
            value={currentText}
            className={props.options?.className}
            type={props.options?.type ? props.options?.type : 'text'}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            role={'textbox'}
            aria-required="true"
            onFocus={onFocus}
        />
    )
}

export default UnstyledTextInput;
