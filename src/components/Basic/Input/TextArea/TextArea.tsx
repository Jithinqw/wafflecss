import React, { 
    ChangeEvent, forwardRef, 
    KeyboardEvent, useEffect 
} from "react";
import styled from "styled-components";
import { commonConstant } from "../../../../models/constants";
import Utilities from "../../../../utils/common";
import { ITextAreaProps } from "./TextArea.props";

/**
 * @function resolveError
 * @param {boolean} isError 
 * @param {string} errorColor 
 * @returns {string}
 */
 const resolveError = (isError?: boolean, errorColor?: string) => {
    if(isError && errorColor && !Utilities.isEmpty(errorColor)) {
        return errorColor;
    } else if(isError) {
        return 'red';
    }
    return 'inherit';
}

const StyledTextArea = styled.textarea<ITextAreaProps>`
    opacity: ${props => props.data?.isDisabled ? '0.3' : '1'};
    padding: 0;
    line-height: inherit;
    color: inherit;
    width: inherit;
    font-family: inherit;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-duration: 200ms;
    font-size: 1rem;
    padding-inline-start: 0.3rem;
    padding-inline-end: 0.3rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: ${
        props => props.data && resolveError(props.data?.isError, props.data?.errorBorderColor)
    };
    background: inherit;
    &:focus-visible {
        z-index:1;
        border-color: rgb(49,130,206);
        box-shadow: rgb(49, 130, 206) 0px 0px 0px 1px;
    }
    ::placeholder {
        font-family: ${commonConstant.fontFamily};
        font-size: 12px;
    }
`;

const TextArea = forwardRef((props: ITextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
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
        <StyledTextArea 
            {...props}
            placeholder={props.data?.placeholderText ? props.data?.placeholderText : ''}
            value={currentText}
            name={props.data?.name}
            id={props.data?.id}
            ref={ref}
            cols={props.data?.cols}
            rows={props.data?.rows}
            disabled={props.data?.isDisabled ? props.data?.isDisabled : false}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
});

export default TextArea;
