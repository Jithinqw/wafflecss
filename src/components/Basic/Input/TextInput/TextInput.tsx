import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { ITextInputProps } from "./TextInput.props";

/**
 * @function resolveFontSize
 * @param fontSize 
 * @returns 
 */
const resolveFontSize = (fontSize: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(fontSize) {
        case 'xs':
            return '0.75rem';
        case 'sm':
            return '0.875rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '1.125rem';
        default:
            return '1rem';
    }
}

/**
 * @function resolveHeight
 * @param fontSize 
 * @returns 
 */
const resolveHeight = (fontSize: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(fontSize) {
        case 'xs':
            return '2.5rem';
        case 'sm':
            return '3rem';
        case 'md':
            return '3.5rem';
        case 'lg':
            return '4rem';
        default:
            return '3rem';
    }
}

const StyledTextInput = styled.input<ITextInputProps>`
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
    font-size: ${props => props.options?.size ? resolveFontSize(props?.options?.size) : '1rem'};
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    height: ${props => props.options?.size ? resolveHeight(props.options.size) : '2.5rem'};
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: ${props => props?.data?.errorBorderColor ? props?.data?.errorBorderColor : 'inherit'};
    background: inherit;
`;

const TextInput = (props: ITextInputProps) => {
    const [currentText, setCurrentText] = React.useState<string>('');


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
        <StyledTextInput 
            {...props}
            placeholder={props.data.placeholder}
            id={props.data.id}
            name={props.data.name}
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            value={props.data.value}
            type={props.options?.type ? props.options.type : 'text'}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onFocus = {onFocus}
        /> 
    )
}

export default TextInput;
