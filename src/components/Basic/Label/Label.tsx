import React, { forwardRef, memo } from "react";
import styled from "styled-components"
import { colorPalette, commonConstant } from "../../../models/constants";
import { ILabelProps } from "./Label.props";

/**
 * @function resolveLabelSize
 * @param {'sm' | 'md' | 'lg' | undefined} fontSize 
 * @returns {string}
 */
const resolveLabelSize = (fontSize: 'sm' | 'md' | 'lg' | undefined) => {
    switch(fontSize) {
        case 'sm':
            return '8px';
        case 'md':
            return '12px';
        case 'lg':
            return '18px';
        default:
            return '18px';
    }
}

const StyledLabel = styled.label<ILabelProps>`
    font-family: ${props => props.options?.fontFamily ? props.options.fontFamily : commonConstant.fontFamily};
    color: ${props => props.options?.color ? props.options.color : colorPalette.defaultBlackColor};
    font-size:${props => props.options?.fontSize ? resolveLabelSize(props.options?.size) : resolveLabelSize('md')};
`;

const Label = forwardRef((props: ILabelProps, ref: React.Ref<HTMLLabelElement>) => {
    return (
        <StyledLabel 
            {...props}
            ref={ref}
            id={props.options?.id}
        >
            {props.data.displayText}
        </StyledLabel>
    )
});

export default memo(Label);
