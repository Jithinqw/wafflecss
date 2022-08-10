import React, { forwardRef } from "react";
import styled from "styled-components";
import { colorPalette } from "../../../../utils/constants";
import { ISwitchProps } from "./Switch.props";

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const StyledSwitch = styled.div<ISwitchProps>`
    position: relative;
    min-width: 65px;
    width: inherit;
    height: 32px;
    background: ${colorPalette.switchColor};
    border-radius: 32px;
    padding: 4px;

    &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;

const Input = styled.input<ISwitchProps>`
    display: none;
    &:checked + ${StyledSwitch} {
        background: green;
        &:before {
            transform: translate(32px, -50%);
        }
    }
`;

/**
 * @function resolveSwitchSize
 * @param {sm | md | lg} switchSize 
 * @returns {string}
 */
const resolveSwitchSize = (switchSize: 'sm' | 'md' | 'lg') => {
    switch(switchSize) {
        case 'sm':
            return '';
        case 'md':
            return '';
        case 'lg':
            return '';
        default:
            return '';
    }
}

/**
 * @function resolveSwitchCircle
 * @param {sm | md | lg} switchSize 
 * @returns {string}
 */
 const resolveSwitchCircle = (switchSize: 'sm' | 'md' | 'lg') => {
    switch(switchSize) {
        case 'sm':
            return '';
        case 'md':
            return '';
        case 'lg':
            return '';
        default:
            return '';
    }
}

const Switch = forwardRef(
    (props: ISwitchProps, ref: React.Ref<HTMLInputElement>) => {

    const onClickEvent = () => {
        if(props.events?.onChange) {
            return props.events.onChange();
        }
    }

    return (
        <Label>
            <Input 
                type={'checkbox'} 
                onClick={onClickEvent}
                ref={ref}
                {...props}
                className={props.options?.className}
            />
            <StyledSwitch {...props}/>
        </Label>
    )
});

export default Switch;
