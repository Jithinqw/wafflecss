import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { colorPalette, commonConstant } from "../../../../utils/constants";
import { ICheckboxProps } from "./Checkbox.props";

/**
 * @function resolveCheckboxSize
 * @description Resolve checkbox type
 * @param {string} size 
 */
const resolveCheckboxSize = (size: 'sm' | 'md' | 'lg') => {
    switch(size) {
        case 'sm':
            return '1em';
        case 'md':
            return '2em';
        case 'lg':
            return '3em';
        default:
            return '1em';
    }
}

/**
 * @function resolveCheckboxLabelSize
 * @param {sm / md / lg} size 
 * @returns {string}
 */
const resolveCheckboxLabelSize = (size: 'sm' | 'md' | 'lg') => {
    switch(size) {
        case 'sm':
            return '0.875rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '3rem';
        default:
            return '0.875rem';
    }
}

/**
 * @function resolveCheckboxLineHeight
 * @param {sm / md / lg} size 
 * @returns {string}
 */
const resolveCheckboxLineHeight = (size: 'sm' | 'md' | 'lg') => {
    switch(size) {
        case 'sm':
            return '1.25rem';
        case 'md':
            return '2.10rem';
        case 'lg':
            return '2.5rem';
        default:
            return '1.25rem';
    }
}
const StyledLabel = styled.span<ICheckboxProps>`
    font-size: ${
        props => props.options?.variant ? resolveCheckboxLabelSize(props.options.variant) : resolveCheckboxLabelSize('sm')
    };
    font-weight: 400;
    line-height: ${
        props => props.options?.variant ? resolveCheckboxLineHeight(props.options.variant) : resolveCheckboxLineHeight('sm')
    };
    text-transform: initial;
    letter-spacing: initial;
    font-family: ${commonConstant.fontFamily};
    -webkit-tap-highlight-color: ${colorPalette.defaultBlackColor};
`;

const StyledCheckboxInput = styled.input<ICheckboxProps>`
    width: ${props => props.options?.variant ? resolveCheckboxSize(props.options.variant) : resolveCheckboxSize('sm')};
    height: ${props => props.options?.variant ? resolveCheckboxSize(props.options.variant) : resolveCheckboxSize('sm')};
    margin-top: 0.25em;
    vertical-align: top;
    background-color: ${colorPalette.defaultWhite};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border:  1px solid rgba(0,0,0,.25);
    appearance: none;
    color-adjust: exact;
    print-color-adjust: exact;

    &:checked {
        background-color: ${props => props.options?.bgColor ? props.options.bgColor : '#0d6efd'};
        border-color: ${props => props.options?.borderColor ? props.options.borderColor : '#0d6efd'};
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    };
`;

const CheckBox = forwardRef((
        props: ICheckboxProps, 
        ref: React.Ref<HTMLInputElement>
    ) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    /**
     * @function onCheckbokStateChange
     * @param {React.FormEvent<HTMLInputElement>} e 
     * @returns {void}
     */
    const onCheckbokStateChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setIsChecked(e?.currentTarget?.checked);
        if(props.events?.onCheckboxChange) {
            props.events?.onCheckboxChange(e?.currentTarget?.checked);
        }
    }

    return(
        <span>
            <StyledCheckboxInput 
                type={'checkbox'}
                checked={isChecked}
                ref={ref}
                {...props}
                onChange={onCheckbokStateChange}
                className={props.options?.className}
                id={props.options?.id}
            />
            <StyledLabel {...props}>
                {props.data.displayText}
            </StyledLabel>
        </span>
    )
});

export default CheckBox;
