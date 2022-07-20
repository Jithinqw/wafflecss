import React, { forwardRef } from "react";
import styled from "styled-components";
import Utilities from "../../../utils/common";
import { IColorPickerProps } from "./ColorSelector.props";

const StyledColorItem = styled.label`
    cursor: pointer;
    margin-right: 24px;
`;

const StyledHiddenDiv = styled.div`
    border: 0!important;
    height: 1px!important;
    overflow: hidden;
    padding: 0!important;
    position: absolute !important;
    width: 1px!important;
    white-space: nowrap;
`;

const StyledInput = styled.input`
    height: 0;
    opacity: 0;
    position: absolute;
    visibility: hidden;
    width: 0;
`;

const StyledSelectedDiv = styled.div<IColorPickerProps>`
    position: relative;
    border: 1px solid #d0d0d0;
    border-radius: 50%;
    display: inline-block;
    height: ${props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')};
    width: ${props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')};
    background-color: ${props => props.options?.borderColor ? props.options.borderColor : '#0057b8'};
    border: 4px solid #fff;
    -webkit-box-shadow: ${props => props.options?.colorSize ? resolveBorderShadow(props.options.colorSize, props.options.borderColor) : resolveBorderShadow('md')};
    box-shadow: ${props => props.options?.colorSize ? resolveBorderShadow(props.options.colorSize, props.options.borderColor) : resolveBorderShadow('md')};
`;

const StyledDiv = styled.div<IColorPickerProps>`
    position: relative;
    border: 1px solid #d0d0d0;
    border-radius: 50%;
    display: inline-block;
    height: ${props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')};
    width: ${props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')};
    border-radius: 50%;
`;

/**
 * @function resolveColorSelectorSize
 * @param {'sm' | 'md' | 'lg'} selectorSize 
 * @returns {string}
 */
const resolveColorSelectorSize = (selectorSize: 'sm' | 'md' | 'lg') => {
    switch(selectorSize) {
        case 'sm':
            return '16px';
        case 'md':
            return '20px';
        case 'lg':
            return '26px';
        default:
            return '20px';
    }
}

/**
 * @function resolveBorderColor
 * @description Resolve optional border color 
 * from user from options param.
 * @param {string} borderColor 
 * @returns {string}
 */
const resolveBorderColor = (borderColor?: string): string => {
    if(borderColor && !Utilities.isEmpty(borderColor)) {
        return borderColor;
    }
    return '#0057b8';
}

/**
 * @function resolveBorderShadow
 * @param {'sm' | 'md' | 'lg'} selectorSize 
 * @returns {string}
 */
const resolveBorderShadow = (selectorSize: 'sm' | 'md' | 'lg', borderColor?: string) => {
    switch(selectorSize) {
        case 'sm':
            return `0 0 0 1px ${resolveBorderColor(borderColor)}`;
        case 'md':
            return `0 0 0 2px ${resolveBorderColor(borderColor)}`;
        case 'lg':
            return `0 0 0 4px ${resolveBorderColor(borderColor)};`;
        default:
            return `0 0 0 2px ${resolveBorderColor(borderColor)};`;
    }
}

const ColorSelector = forwardRef((props: IColorPickerProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <StyledColorItem>
            <StyledHiddenDiv />
            <StyledInput 
                type="radio"
                ref={ref}
                value={props.data.color}
                checked={props.data.selected}
                onClick={props.events?.onClick}
                onChange={() => props.events?.onChange}
                disabled={props.options?.disabled}
            />
            {
                props.data.selected ? (
                    <StyledSelectedDiv 
                        {...props} 
                        style={{backgroundColor: props.data?.color}}
                    />
                ) : (
                    <StyledDiv 
                        {...props} 
                        style={{backgroundColor: props.data?.color}}
                    />
                )
            }
            
        </StyledColorItem>
    )
});

export default ColorSelector;
