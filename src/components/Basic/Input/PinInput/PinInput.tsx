import React, { 
    ChangeEvent, forwardRef, useEffect 
} from "react";
import styled from "styled-components";
import { commonConstant } from "../../../../utils/constants";
import Utilities from "../../../../utils/common";
import { IPinInputProps } from "./PinInput.props";

/**
 * @function resolvePinSize
 * @param {'xs' | 'sm' | 'md' | 'lg'} pinInputStyle 
 * @returns {string}
 */
 const resolvePinSize = (pinInputStyle: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(pinInputStyle) {
        case 'xs':
            return '1.5rem';
        case 'sm':
            return '2rem';
        case 'md':
            return '2.5rem';
        case 'lg':
            return '3rem';
        default:
            return '1.5rem';
    }
}

/**
 * @function resolvePinTextRadius
 * @param {'xs' | 'sm' | 'md' | 'lg'} pinStyle 
 * @returns {string}
 */
const resolvePinTextRadius = (pinStyle: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(pinStyle) {
        case 'xs':
            return '1.5rem';
        case 'sm':
            return '0.125rem';
        case 'md':
            return '0.375rem';
        case 'lg':
            return '0.5rem';
        default:
            return '0.375rem';
    }
}

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

const StyledPinInput = styled.input<IPinInputProps>`
    width: ${props => props.options?.size ? resolvePinSize(props.options.size) : resolvePinSize('md')};
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    opacity: ${props => props.data.isDisabled ? '0.3' : '1'};
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-duration: 200ms;
    text-align: center;
    font-size: 1rem;
    height: ${props => props.options?.size ? resolvePinSize(props.options.size) : resolvePinSize('md')};
    border-radius: ${props => props.options?.size ? resolvePinTextRadius(props.options.size) : resolvePinTextRadius('md')};
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

const PinInput = forwardRef((
        props: IPinInputProps,
        ref: React.Ref<HTMLInputElement>
    ) => {
    
    const [currentText, setCurrentText] = React.useState<string>('');

    useEffect(() => {
        setCurrentText(props.data.value);
    },[]);

    /**
     * @function onChangeEvent
     * @param {ChangeEvent<HTMLInputElement>} e 
     * @returns {void}
     */
    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>): void => {
        setCurrentText(e?.currentTarget?.value);
        if(props.events?.onChange && props.data.isDisabled) {
            return props.events?.onChange(e);
        }
    }

    /**
     * @function onFocusEvent
     * @returns {void}
     */
    const onFocusEvent = (): void => {
        if(props?.events?.onFocus) {
            return props?.events?.onFocus();
        }
    }

    return (
        <StyledPinInput 
            {...props}
            value={currentText}
            id={props.data?.id}
            placeholder={props.data.placeholder ? props.data.placeholder : '○'}
            ref={ref}
            onChange={onChangeEvent}
            onFocus={onFocusEvent}
            autoComplete="off"
            type={'tel'}
            role={'textbox'}
            maxLength={1}
            inputMode={'numeric'}
            className={props.options?.className}
            disabled={props.data?.isDisabled ? props.data.isDisabled : false}
        />
    )
});

export default PinInput