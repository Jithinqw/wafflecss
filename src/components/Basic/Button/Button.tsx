import React, { forwardRef, memo } from "react";
import styled, { keyframes } from "styled-components";
import { 
    buttonConstant, 
    colorPalette, commonConstant 
} from "../../../utils/constants";
import { IButtonProps } from "./Button.props";

/**
 * @function getButtonColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary') => {
    switch(buttonStyle) {
        case 'default':
            return colorPalette.defaultButtonColor;
        case 'danger':
            return colorPalette.defaultDangerButtonColor;
        case 'success':
            return colorPalette.defaultOutlineButtonColor;
        case 'primary':
            return colorPalette.defaultPrimaryButtonColor;
        default:
            return colorPalette.defaultButtonColor;
    }
}

/**
 * @function getButtonBackgoudColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonBackgroudColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary') => {
    switch(buttonStyle) {
        case 'default':
            return colorPalette.defaultButtonBg;
        case 'danger':
            return colorPalette.dangerButtonBg;
        case 'success':
            return colorPalette.outlineButtonBg;
        case 'primary':
            return colorPalette.primaryButtonBg;
        default:
            return colorPalette.defaultButtonBg;
    }
}

/**
 * @function getHoverColor
 * @param buttonStyle 
 * @returns 
 */
const getHoverColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary') => {
    switch(buttonStyle) {
        case 'default':
            return colorPalette.defaultHoverColor;
        case 'danger':
            return colorPalette.dangerHoverColor;
        case 'success':
            return colorPalette.outlineHoverColor;
        case 'primary':
            return colorPalette.primaryHoverColor;
        default:
            return colorPalette.defaultHoverColor;
    }
}


/**
 * @function getButtonBorderColor
 * @param buttonStyle 
 * @returns 
 */
const getButtonBorderColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary') => {
    switch(buttonStyle) {
        case 'default':
        case 'danger':
        case 'success':
            return colorPalette.defaultBorderColor;
        default:
            return colorPalette.defaultBorderColor;
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
            return buttonConstant.buttonWidth.sm;
        case 'md':
            return buttonConstant.buttonWidth.md;
        case 'xs':
            return buttonConstant.buttonWidth.xs;
        case 'lg':
            return buttonConstant.buttonWidth.lg;
        default:
            return buttonConstant.buttonWidth.sm;
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
            return buttonConstant.fontSize.sm;
        case 'md':
            return buttonConstant.fontSize.md;
        case 'xs':
            return buttonConstant.fontSize.xs;
        case 'lg':
            return buttonConstant.fontSize.lg;
        default:
            return buttonConstant.fontSize.sm;
    }
}

/**
 * @function getButtonShadow
 * @param buttonStyle 
 * @returns 
 */
const getButtonShadow = (buttonStyle: 'default' | 'danger' | 'success' | 'primary') => {
    switch(buttonStyle) {
        case 'default':
            return buttonConstant.buttonShadow.default;
        case 'danger':
        case 'success':
            return buttonConstant.buttonShadow.danger;        
        default:
            return buttonConstant.buttonShadow.default;
    }
}

/**
 * @function rippleButton
 * @description Add ripple animation
 */
const rippleButton = keyframes`
    to{
        transform: scale(4);
        opacity: 0;
    }
`;

const StyledDefault = styled.button<IButtonProps>`
    border-radius: ${props => props.data.radius ? props.data.radius : buttonConstant.borderRadius};
    border: ${
        props => props.options?.variants ? getButtonBorderColor(props.options?.variants) : getButtonBorderColor('default')
    };
    font-family: ${props => props.options?.style?.fontFamily ?props.options?.style?.fontFamily : commonConstant.fontFamily};
    font-weight: ${props => props.options?.style?.fontWeight ? props.options?.style?.fontWeight : buttonConstant.fontWeight};
    white-space: nowrap;
    vertical-align: middle;
    cursor: ${
        props => props.data.isDisabled ? commonConstant.cursorNotAllowed : commonConstant.cursorPointer
    };
    appearance: none;
    user-select: none;
    text-decoration: none;
    width: inherit;
    text-align: center;
    display: grid;
    :where(button, input):where(:not(:active)):focus-visible {
        outline-offset: 5px;
    }
    grid-template-areas: "leadingIcon text trailingIcon";
    padding: ${props => props.options?.size ? getButtonWidth(props.options.size) : buttonConstant.padding};
    width: ${props => props.data?.width ? props.data?.width : ''};
    font-size: ${props => props.options?.size ? getFontSize(props.options?.size) : getFontSize('md')};
    color: ${props => props.options?.variants ? getButtonColor(props.options?.variants) : getButtonColor('default')};
    box-shadow: ${props => props.options?.variants ? getButtonShadow(props.options?.variants) : getButtonShadow('default')};
    transition: ${buttonConstant.transition};
    transition-property: ${buttonConstant.transitionProperty};
    opacity: ${props => props.data.isDisabled ? buttonConstant.opacityPartial : buttonConstant.opacityFull};
    &:hover {
        color: ${props => props.options?.variants ? getHoverColor(props.options?.variants) : buttonConstant.hoverColorState};
        background-color: ${props => props.options?.variants ? getButtonBackgroudColor(props.options?.variants) : buttonConstant.hoverBackgroundColor};
    }
`;

const StyledButtonSpan = styled.span`
    font-family: inherit;
    grid-area: text / text / text / text;
`;

const Button = forwardRef((props: IButtonProps, ref:React.Ref<HTMLButtonElement>) => {

    const onClickEvent = () => {
        if(props.events?.onClick && !props.data.isDisabled) {
            return props.events.onClick();
        }
    }

    const onFocusEvent = () => {
        if(props.events?.onFocus) {
            return props.events.onFocus();
        }
    }

    return (
        <StyledDefault 
            {...props} 
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            type={props.options?.buttonType ? props.options?.buttonType : 'button'}
            onClick={onClickEvent}
            onFocus={onFocusEvent}
            id={props.data.id}
            role={'button'}
            ref={ref}
            className={props.options?.className}
        >
            <StyledButtonSpan>
                {props.data.displayText}
            </StyledButtonSpan>
        </StyledDefault>
    )
})

export default memo(Button);
