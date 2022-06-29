import React from "react";
import styled, { keyframes } from "styled-components";
import { colorPalette, 
    commonConstant 
} from "../../models/constants";
import { ISkeletonProps } from "./Skeleton.props";

const resolveHeight = (width: 'sm' | 'xs' | 'lg') => {
    switch(width) {
        case 'sm':
            return '0.8em';
        case 'xs':
            return '0.6em';
        case 'lg':
            return '1.2em';
        default:
            return '0.8em';
    }
}

const resolveCircleRadius = (width: 'sm' | 'xs' | 'lg') => {
    switch(width) {
        case 'sm':
            return '50px';
        case 'xs':
            return '100px';
        case 'lg':
            return '200px';
        default:
            return '50px';
    }
}

const glowAnimation = keyframes`
    50% {
        opacity: .2;
    }
`;

const StyledSkeletonCol = styled.span<ISkeletonProps>`
    display: inline-block;
    min-height: 1em;
    vertical-align: middle;
    background-color: ${props => props.options?.color ? props.options?.color : colorPalette.defaultGreyColor};
    opacity: .5;
    cursor: ${commonConstant.cursorWait};
    width: ${props => props.options?.height ? resolveHeight(props.options?.height) : resolveHeight('sm')};
    height: ${props => props.options?.height ? resolveHeight(props.options?.height) : resolveHeight('sm')};
    webkit-animation: ${glowAnimation} 2s ease-in-out infinite;
    animation: ${glowAnimation} 2s ease-in-out infinite;
`;

const StyledSkeletonircle = styled.span<ISkeletonProps>`
    display: inline-block;
    min-height: 1em;
    vertical-align: middle;
    background-color: ${props => props.options?.color ? props.options?.color : colorPalette.defaultGreyColor};
    width: ${props => props.options?.height ? resolveCircleRadius(props.options?.height) : resolveCircleRadius('sm')};
    height:${props => props.options?.height ? resolveCircleRadius(props.options?.height) : resolveCircleRadius('sm')};
    border-radius: 50%;
    opacity: .5;
    cursor: ${commonConstant.cursorWait};
    webkit-animation: ${glowAnimation} 2s ease-in-out infinite;
    animation: ${glowAnimation} 2s ease-in-out infinite;
`;

/**
 * @function resolveSkeletonType
 * @param {ISkeletonProps} props 
 * @returns {StyledComponent}
 */
const resolveSkeletonType = (props: ISkeletonProps) => {
    console.log(props);
    switch(props.options?.type) {
        case 'col':
            return <StyledSkeletonCol {...props}/>
        case 'circle':
            console.log(' I')
            return <StyledSkeletonircle {...props}/>
        default:
            return <StyledSkeletonCol {...props}/>
    }
}

const Skeleton = (props: ISkeletonProps) => {
    return (
        resolveSkeletonType(props)
    )
}

export default Skeleton;