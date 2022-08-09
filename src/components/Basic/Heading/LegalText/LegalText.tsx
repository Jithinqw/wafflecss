import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import { 
    colorPalette, commonConstant,
    legalTextConstant 
} from "../../../../utils/constants";
import ILegalTextProps from "./LegalText.props";

/**
 * @function makeLegalStyle
 * @param {'sm' | 'md' | 'lg'} style 
 * @returns {string}
 */
const makeLegalStyle = (style?: 'sm' | 'md' | 'lg') => {
    switch(style) {
        case 'sm':
            return legalTextConstant.textStyleScale.sm;
        case 'md':
            return legalTextConstant.textStyleScale.md;
        case 'lg':
            return legalTextConstant.textStyleScale.lg;
        default:
            return legalTextConstant.textStyleScale.sm;
    }
}

const StyledLegalText = styled.span<ILegalTextProps>`
    font-size: ${props => props.options?.legalTextSize ? makeLegalStyle(props.options?.legalTextSize) : '12px'};
    line-height: ${legalTextConstant.lineHeight};
    font-weight: ${props => props.options?.style?.fontWeight ? props.options?.style?.fontWeight : legalTextConstant.fontWeight};
    letter-spacing: ${legalTextConstant.letterSpacing}; 
    font-family: ${props => props.options?.style?.fontFamily ? props.options?.style?.fontFamily : commonConstant.fontFamily};
    color: ${props => props.options?.style?.color ? props.options?.style?.color : colorPalette.defaultBlackColor};
`;


const LegalText = forwardRef((props: ILegalTextProps, ref: React.Ref<HTMLSpanElement>) => {

    const OnClickEvent = () => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    return (
        <StyledLegalText 
            {...props}
            onClick={OnClickEvent}
            ref={ref}
            className={props.options?.className}
        >
            {props.data.displayText}
        </StyledLegalText>
    )
});

export default memo(LegalText);
