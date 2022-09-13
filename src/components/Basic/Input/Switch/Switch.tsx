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
    height: ${props => props.options?.size ? resolveSwitchSize(props.options.size) : resolveSwitchSize('md')};
    background: ${colorPalette.switchColor};
    border-radius: 32px;
    padding: 4px;

    &:before {
        content: "";
        position: absolute;
        width: ${props => props.options?.size ? resolveSwitchCircle(props.options.size) : resolveSwitchCircle('sm')};
        height: ${props => props.options?.size ? resolveSwitchCircle(props.options.size) : resolveSwitchCircle('sm')};
        border-radius: 35px;
        top: 50%;
        left: ${props => props.options?.size ? resolveLeftSwitchPosition(props.options.size) : resolveLeftSwitchPosition('sm')};;
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
const resolveSwitchSize = (switchSize: 'sm' | 'md' | 'lg'):string => {
    switch(switchSize) {
        case 'sm':
            return '12px';
        case 'md':
            return '20px';
        case 'lg':
            return '24px';
        default:
            return '20px';
    }
}

/**
 * @function resolveSwitchCircle
 * @param {sm | md | lg} switchSize 
 * @returns {string}
 */
 const resolveSwitchCircle = (switchSize: 'sm' | 'md' | 'lg'):string => {
    switch(switchSize) {
        case 'sm':
            return '12px';
        case 'md':
            return '18px';
        case 'lg':
            return '20px';
        default:
            return '18px';
    }
}

/**
 * @function resolveLeftSwitchPosition
 * @param {'sm' | 'md' | 'lg'} switchSize 
 * @returns {string}
 */
const resolveLeftSwitchPosition = (switchSize: 'sm' | 'md' | 'lg'):string => {
    switch(switchSize) {
        case 'sm':
            return '12px';
        case 'md':
            return '10px';
        case 'lg':
            return '14px';
        default:
            return '20px';
    }
}

const Switch = forwardRef((
        props: ISwitchProps,
        ref: React.Ref<HTMLInputElement>
    ):JSX.Element => {

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
                role={'switch'}
                className={props.options?.className}
            />
            <StyledSwitch {...props}/>
        </Label>
    )
});

export default Switch;
