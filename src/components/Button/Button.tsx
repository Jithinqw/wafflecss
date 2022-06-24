import React from "react";
import styled from "styled-components";
import { IButtonProps } from "./Button.props";

/**
 * @function getButtonColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonColor = (buttonStyle: 'default' | 'danger' | 'outline' | 'invisible') => {
    switch(buttonStyle) {
        case 'default':
            return 'rgb(36, 41, 47)';
        case 'danger':
            return 'rgb(207, 34, 46)';
        case 'outline':
            return 'rgb(9, 105, 218)';
        case 'invisible':
            return 'rgb(9, 105, 218)';
        default:
            return 'rgb(36, 41, 47)';
    }
}

/**
 * @function getButtonBackgoudColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonBackgroudColor = (buttonStyle: 'default' | 'danger' | 'outline') => {
    switch(buttonStyle) {
        case 'default':
            return '#f6f8fa';
        case 'danger':
            return 'rgb(207, 34, 46)';
        case 'outline':
            return 'rgb(9, 105, 218)';
        default:
            return '#f6f8fa';
    }
}

/**
 * @function getHoverColor
 * @param buttonStyle 
 * @returns 
 */
const getHoverColor = (buttonStyle: 'default' | 'danger' | 'outline') => {
    switch(buttonStyle) {
        case 'default':
            return 'rgb(36, 41, 47)';
        case 'danger':
            return '#f6f8fa';
        case 'outline':
            return '#f6f8fa';
        default:
            return 'rgb(36, 41, 47)';
    }
}


/**
 * @function getButtonBorderColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonBorderColor = (buttonStyle: 'default' | 'danger' | 'outline') => {
    switch(buttonStyle) {
        case 'default':
        case 'danger':
        case 'outline':
            return ' 1px solid rgba(27, 31, 36, 0.15)';
        default:
            return ' 1px solid rgba(27, 31, 36, 0.15)';
    }
}

/**
 * @function getButtonWidth
 * @param buttonType 
 * @returns 
 */
const getButtonWidth = (buttonType: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(buttonType) {
        case 'sm':
            return '5px 16px';
        case 'md':
            return '8px 20px';
        case 'xs':
            return '12px 24px';
        case 'lg':
            return '18px 32px';
        default:
            return '5px 16px';
    }
}

/**
 * @function getFontSize
 * @param buttonType 
 * @returns 
 */
const getFontSize = (buttonType: 'xs' | 'sm' | 'md' | 'lg') => {
    switch(buttonType) {
        case 'sm':
            return '8px';
        case 'md':
            return '12px';
        case 'xs':
            return '18px';
        case 'lg':
            return '24px';
        default:
            return '12px';
    }
}

/**
 * @function getButtonShadow
 * @param buttonStyle 
 * @returns 
 */
const getButtonShadow = (buttonStyle: 'default' | 'danger' | 'outline') => {
    switch(buttonStyle) {
        case 'default':
            return 'rgb(27 31 36 / 4%) 0px 1px 0px, rgb(255 255 255 / 25%) 0px 1px 0px inset';
        case 'danger':
            return 'rgb(27 31 36 / 4%) 0px 1px 0px';
        case 'outline':
            return 'rgb(27 31 36 / 4%) 0px 1px 0px';
        default:
            return 'rgb(27 31 36 / 4%) 0px 1px 0px, rgb(255 255 255 / 25%) 0px 1px 0px inset';
    }
}

const StyledDefault = styled.button<IButtonProps>`
    border-radius: ${props => props.data.radius ? props.data.radius : '6px'};
    border: ${props => props.options?.variants ? getButtonBorderColor(props.options?.variants) : getButtonBorderColor('default')};
    font-family: inherit;
    font-weight: ${props => props.data.fontWeight ? props.data.fontWeight : '300'};
    white-space: nowrap;
    vertical-align: middle;
    cursor: ${props => props.data.isDisabled ? 'not-allowed' : 'pointer'};
    appearance: none;
    user-select: none;
    text-decoration: none;
    text-align: center;
    display: grid;
    grid-template-areas: "leadingIcon text trailingIcon";
    padding: ${props => props.options?.size ? getButtonWidth(props.options.size) : '5px 16px'};
    width: ${props => props.data?.width ? props.data?.width : ''};
    font-size: ${props => props.options?.size ? getFontSize(props.options?.size) : getFontSize('md')};
    color: ${props => props.options?.variants ? getButtonColor(props.options?.variants) : getButtonColor('default')};
    box-shadow: ${props => props.options?.variants ? getButtonShadow(props.options?.variants) : getButtonShadow('default')};
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
    opacity: ${props => props.data.isDisabled ? '0.3' : '1'};
    &:hover {
        color: ${props => props.options?.variants ? getHoverColor(props.options?.variants) : 'none'};
        background-color: ${props => props.options?.variants ? getButtonBackgroudColor(props.options?.variants) : 'none'};
    }
`;

const StyledButtonSpan = styled.span<IButtonProps>`
    font-family: inherit;
    grid-area: text / text / text / text;
`;

const Button = (props: IButtonProps) => {
    return (
        <StyledDefault 
            {...props} 
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            type={props.options?.buttonType ? props.options?.buttonType : 'button'}
            onClick={props.events?.onClick}
        >
            <StyledButtonSpan {...props}>
                {props.data.displayText}
            </StyledButtonSpan>
        </StyledDefault>
    )
}

export default Button;
