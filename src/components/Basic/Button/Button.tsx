import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import { 
    buttonConstant, 
    colorPalette, commonConstant 
} from "../../../utils/constants";
import { IButtonProps } from "./Button.props";

/**
 * @function getButtonColor
 * @param {'default' | 'danger' | 'success' | 'primary'} buttonStyle 
 * @returns {string}
 */
const getButtonColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary'):string => {
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
 * @param {'default' | 'danger' | 'success' | 'primary'} buttonStyle 
 * @returns {string}
 */
const getButtonBackgroudColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary'):string => {
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
 * @param {'default' | 'danger' | 'success' | 'primary'} buttonStyle 
 * @returns {string}
 */
const getHoverColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary'): string => {
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
 * @param {'default' | 'danger' | 'success' | 'primary'} buttonStyle 
 * @returns {string}
 */
const getButtonBorderColor = (buttonStyle: 'default' | 'danger' | 'success' | 'primary'):string => {
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
 * @param {'xs' | 'sm' | 'md' | 'lg'} buttonType 
 * @returns {string}
 */
const getButtonWidth = (buttonType: 'xs' | 'sm' | 'md' | 'lg'):string => {
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
 * @param {'xs' | 'sm' | 'md' | 'lg'} buttonType 
 * @returns {string}
 */
const getFontSize = (buttonType: 'xs' | 'sm' | 'md' | 'lg'):string => {
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
 * @param {'default' | 'danger' | 'success' | 'primary'} buttonStyle 
 * @returns {string} 
 */
const getButtonShadow = (buttonStyle: 'default' | 'danger' | 'success' | 'primary'):string => {
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

const Button = forwardRef((
        props: IButtonProps,
        ref:React.Ref<HTMLButtonElement>
    ) => {

    /**
     * @function onClickEvent
     * @returns {void}
     */
    const onClickEvent = ():void => {
        if(props.events?.onClick && !props.data.isDisabled) {
            return props.events.onClick();
        }
    }

    /**
     * @function onFocusEvent
     * @returns {void}
     */
    const onFocusEvent = ():void => {
        if(props.events?.onFocus) {
            return props.events.onFocus();
        }
    }

    /**
     * @function onEnterKeyPressed
     * @param {React.KeyboardEvent<HTMLButtonElement>} e 
     * @returns {void}
     */
    const onEnterKeyPressed = (e: React.KeyboardEvent<HTMLButtonElement>):void => {
        if(
            props.events?.onKeyDown && 
            e.key.toLowerCase() === 'enter'
        ) {
            e.preventDefault();
            return props.events.onKeyDown();
        }
    }

    return (
        <StyledDefault 
            {...props} 
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            type={props.options?.buttonType ? props.options?.buttonType : 'button'}
            onClick={onClickEvent}
            onFocus={onFocusEvent}
            onKeyDown={onEnterKeyPressed}
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
