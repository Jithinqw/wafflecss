import React from "react";
import styled from "styled-components";
import { 
    colorPalette, commonConstant,
    legalTextConstant 
} from "../../../../models/constants";
import ILegalTextProps from "./LegalText.props";

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


const LegalText = (props: ILegalTextProps) => {

    return (
        <StyledLegalText {...props}>
            {props.data.displayText}
        </StyledLegalText>
    )
}

export default LegalText;
