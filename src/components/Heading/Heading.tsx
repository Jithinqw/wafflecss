import React from "react";
import styled from "styled-components";
import { IHeadingProps } from "./Heading.props";

const makeFontStyle = (style?: 'italics' | 'normal' | 'oblique' | undefined) => {
    switch (style) {
        case 'italics':
            return 'italic';
        case 'oblique':
            return 'oblique'
        default:
            return 'normal';
    }
}

const makeHeadingSize = (fontSize: 'normal' | 'small' | 'extrasmall' | 'large' | 'extralarge' | undefined) => {
    switch(fontSize) {
        case 'normal':
            return '16px';
        case 'small':
            return '12px';
        case 'extrasmall':
            return '8px';
        case 'large':
            return '18px';
        case 'extralarge':
            return '24px';
        default:
            return '16px';
    }
} 

const makeHeadingWeight = (fontSize: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold' | undefined) => {
    switch(fontSize) {
        case 'extrasmall':
            return '90';
        case 'small':
            return '100';
        case 'normal':
            return '300';
        case 'bold':
            return '500';
        case 'extrabold':
            return '700';
        default:
            return '300';
    }
}

const StyledHeading = styled.p<IHeadingProps>`
    color: ${props => props.options?.headingColor ? props.options?.headingColor + ' !important' : `rgb(42, 42, 51)`};
    text-align: center;
    text-transform: none;
    letter-spacing: -.003em;
    font-family: "inherit";
    font-weight: ${props => props.options?.weight ? makeHeadingWeight(props.options.weight) : '300'};
    font-size: ${props => props.options?.size ? makeHeadingSize(props.options.size) : '16px'};
    font-style: ${props => makeFontStyle(props.options?.style)};
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