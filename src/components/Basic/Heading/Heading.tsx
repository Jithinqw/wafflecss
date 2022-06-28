import React from 'react';
import styled from 'styled-components';
import { 
    colorPalette, commonConstant,
    headingConstant 
} from '../../../models/constants';
import Animation from '../../Animation/Animation';
import { IHeadingProps } from './Heading.props';

/**
 * @function makeFontStyle
 * @description generate font style
 * @param {string} style 
 * @returns {string}
 */
const makeFontStyle = (style: 'italics' | 'normal' | 'oblique' | undefined) => {
    switch (style) {
        case 'italics':
            return 'italic';
        case 'oblique':
            return 'oblique'
        default:
            return 'normal';
    }
}

/**
 * @function makeHeadingSize
 * @description makes font size
 * @param {string} fontSize
 * @returns {string}
 */
const makeHeadingSize = (fontSize: 'normal' | 'small' | 'extrasmall' | 'large' | 'extralarge' | undefined) => {
    switch(fontSize) {
        case 'normal':
            return headingConstant.headingSizeScale.normal;
        case 'small':
            return headingConstant.headingSizeScale.small;
        case 'extrasmall':
            return headingConstant.headingSizeScale.extrasmall;
        case 'large':
            return headingConstant.headingSizeScale.large;
        case 'extralarge':
            return headingConstant.headingSizeScale.extralarge;
        default:
            return headingConstant.headingSizeScale.normal;
    }
} 

/**
 * @function makeHeadingWeight
 * @param {string} fontSize 
 * @returns {string}
 */
const makeHeadingWeight = (fontSize: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold' | undefined) => {
    switch(fontSize) {
        case 'extrasmall':
            return headingConstant.headingWeightScale.extrasmall;
        case 'small':
            return headingConstant.headingWeightScale.small;
        case 'normal':
            return headingConstant.headingWeightScale.normal;
        case 'bold':
            return headingConstant.headingWeightScale.bold;
        case 'extrabold':
            return headingConstant.headingWeightScale.extrabold;
        default:
            return headingConstant.headingWeightScale.normal;
    }
}

const StyledHeading = styled.p<IHeadingProps>`
    color: ${props => props.options?.headingColor ? props.options?.headingColor + ' !important' : colorPalette.defaultBlackColor};
    text-transform: ${commonConstant.textTransform};
    letter-spacing: ${headingConstant.defaultLetterSpacing};
    font-family: ${commonConstant.fontFamily};
    font-weight: ${props => props.options?.weight ? makeHeadingWeight(props.options.weight) : headingConstant.fontWeight};
    font-size: ${props => props.options?.size ? makeHeadingSize(props.options.size) : headingConstant.fontSize};
    font-style: ${props => props.options?.style ? makeFontStyle(props.options?.style) : headingConstant.fontStyle};
    animation: ${props => props.options?.animationType ? Animation(props.options.animationType) : commonConstant.defaultNone}
`;

const Heading = (props: IHeadingProps) => {
    return (
        <StyledHeading
            id={props.data?.id}
            {...props}
        >
            {props.data?.headingText}
        </StyledHeading>
    )
}

export default Heading;