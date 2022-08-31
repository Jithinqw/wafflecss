import React, { ChangeEvent, KeyboardEvent, useEffect } from "react";
import { ITextAreaProps } from "../Basic/Input/TextArea/TextArea.props";

const UnstyledTextArea = (props: ITextAreaProps) => {
    const [currentText, setCurrentText] = React.useState<string>('');

    useEffect(() => {
        const value = props.data.value ? props.data.value : ''
        setCurrentText(value);
    },[]);

    /**
     * @function onChange
     * @description change handler for input
     * @param {changeEvent} e 
     */
     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentText(e.currentTarget.value);
        if(props?.events?.onChange) {
            props.events?.onChange(e);
        }
    }

    /**
     * @function onBlur
     * @description onBlur change handler for input
     */
    const onBlur = () => {
        if(props?.events?.onBlur) {
            props.events?.onBlur(currentText);
        }
    }

    /**
     * @function onKeyPress
     * @param {KeyboardEvent<HTMLInputElement>} event 
     * @description onKeyPress handler for input
     */
    const onKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onKeyPress) {
            props?.events?.onKeyPress(currentText, event);
        }
    }

    /**
     * @function onFocus
     * @param {React.FocusEvent<HTMLInputElement>} event 
     * @description onFocus handler for input
     */
    const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onFocus) {
            props.events?.onFocus(currentText, event)
        }
    }

    return (
        <textarea
            placeholder={props.data?.placeholderText ? props.data?.placeholderText : ''}
            value={currentText}
            name={props.data?.name}
            id={props.data?.id}
            role={'textbox'}
            cols={props.data?.cols}
            className={props?.options?.className}
            rows={props.data?.rows}
            disabled={props.data?.isDisabled ? props.data?.isDisabled : false}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
}

export default UnstyledTextArea;
