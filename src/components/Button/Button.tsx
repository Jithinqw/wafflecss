import React from "react";
import styled from "styled-components";
import { IButtonProps } from "./Button.props";

const generateFontSize = (buttonSize: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'xs':
            return '0.75rem';
        case 'sm':
            return '0.875rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '1.125rem';
        default:
            return '0.875rem';
    }
}

const generateButtonHeight = (buttonSize: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'xs':
            return '1.5rem';
        case 'sm':
            return '2rem';
        case 'md':
            return '2.5rem';
        case 'lg':
            return '3rem';
        default:
            return '2rem'
    }
}

const generateButtonSpace = (buttonSize: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'xs':
            return '0.5rem';
        case 'sm':
            return '0.75rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '1.25rem';
        default:
            return '0.75rem'
    }
}
const StyledButton = styled.button<IButtonProps>`
    display: inline-flex;
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: transparent solid 2px;
    outline-offset: 2px;
    line-height: 1.2;
    border-radius: 0.375rem;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-duration: 200ms;
    height: ${props => props.options?.size ? generateButtonHeight(props.options.size) : generateButtonHeight('sm')};
    min-width: ${props => props.options?.size ? generateButtonHeight(props.options.size) : generateButtonHeight('sm')};
    font-size: ${props =>props.options?.size ? generateFontSize(props.options.size) : generateFontSize('sm')};
    padding-inline-start: ${props =>props.options?.size ? generateButtonSpace(props.options.size) : generateButtonSpace('sm')};
    padding-inline-end: ${props =>props.options?.size ? generateButtonSpace(props.options.size) : generateButtonSpace('sm')};
    background: ${props => props.data?.background ? props.data?.background : 'black'};
    color: ${props => props.data?.color ? props.data?.color : 'white'};
    cursor: pointer;
`;

const Button = (props: IButtonProps) => {
    return (
        <StyledButton {...props}>
            {props.data?.displayText}
        </StyledButton>
    )
}

export default Button;
