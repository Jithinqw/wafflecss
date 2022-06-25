import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { ITextAreaProps } from "./TextArea.props";

const StyledTextArea = styled.textarea<ITextAreaProps>`
    opacity: ${props => props.data.isDisabled ? '0.3' : '1'};
    padding: 0;
    line-height: inherit;
    color: inherit;
    width: 100%;
    font-family: inherit;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-duration: 200ms;
    font-size: '1rem';
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: ${props => props?.data?.errorBorderColor ? props?.data?.errorBorderColor : 'inherit'};
    background: inherit;
`;

const TextArea = (props: ITextAreaProps) => {
    const [currentText, setCurrentText] = React.useState<string>('');

    /**
     * @function onChange
     * @description change handler for input
     * @param e {changeEvent}
     */
     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
    const onKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onKeyPress) {
            props?.events?.onKeyPress(currentText, event);
        }
    }

    /**
     * @function onFocus
     * @param event {React.FocusEvent<HTMLInputElement>}
     * @description onFocus handler for input
     */
    const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onFocus) {
            props.events.onFocus(currentText, event)
        }
    }
    return (
        <StyledTextArea 
            {...props}
            placeholder={props.data.placeholderText ? props.data.placeholderText : ''}
            value={props.data.value}
            name={props.data.name}
            id={props.data.id}
            cols={props.data.cols}
            rows={props.data.rows}
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
}

export default TextArea;
