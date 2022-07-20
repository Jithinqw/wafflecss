import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { colorPalette } from "../../../../models/constants";
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

const StyledLabel = styled.span`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-transform: initial;
    letter-spacing: initial;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
    &:checked {
        background-color: ${props => props.options?.bgColor ? props.options.bgColor : '#0d6efd'};
        border-color: ${props => props.options?.borderColor ? props.options.borderColor : '#0d6efd'};
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    };
`;

const CheckBox = forwardRef((props: ICheckboxProps, ref: React.Ref<HTMLInputElement>) => {
    const [isChecked, setIsChecked] = useState(false);

    /**
     * @function onCheckbokStateChange
     * @param {React.FormEvent<HTMLInputElement>} e 
     */
    const onCheckbokStateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsChecked(e?.currentTarget?.checked);
        props.events?.onCheckboxChange(e?.currentTarget?.checked);
    }

    return(
        <StyledCheckboxInput 
            type={'checkbox'}
            checked={isChecked}
            ref={ref}
            {...props}
            onChange={onCheckbokStateChange}
        >
            {
                props.options && props.options.checkboxLabel &&
                <StyledLabel>
                    {props.options?.checkboxLabel}
                </StyledLabel>
            }
        
        </StyledCheckboxInput>
    )
});

export default CheckBox;
