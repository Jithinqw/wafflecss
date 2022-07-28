import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { colorPalette, 
    commonConstant, 
    skeletonConstants
} from "../../utils/constants";
import { ISkeletonProps } from "./Skeleton.props";

/**
 * @function resolveHeight
 * @param {'sm' | 'xs' | 'lg'} height 
 * @returns {string}
 */
const resolveHeight = (height: 'sm' | 'xs' | 'lg') => {
    switch(height) {
        case 'sm':
            return skeletonConstants.heightSm;
        case 'xs':
            return skeletonConstants.heightXs;
        case 'lg':
            return skeletonConstants.heightLg;
        default:
            return skeletonConstants.heightSm;
    }
}

/**
 * @function resolveWidth
 * @param width 
 * @returns {string}
 */
const resolveWidth = (width: 'sm' | 'xs' | 'lg') => {
    switch(width) {
        case 'sm':
            return skeletonConstants.widthColSm;
        case 'xs':
            return skeletonConstants.widthColXs;
        case 'lg':
            return '100%';
        default:
            return skeletonConstants.widthColSm;
    }
}

/**
 * @function resolveCircleRadius
 * @param width 
 * @returns {string}
 */
const resolveCircleRadius = (width: 'sm' | 'xs' | 'lg') => {
    switch(width) {
        case 'sm':
            return skeletonConstants.widthSm;
        case 'xs':
            return skeletonConstants.widthXs;
        case 'lg':
            return skeletonConstants.widthLg;
        default:
            return skeletonConstants.widthSm;
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
    width: ${props => props.options?.height ? resolveWidth(props.options?.height) : resolveWidth('sm')};
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
const resolveSkeletonType = (props: ISkeletonProps, ref: React.Ref<HTMLSpanElement>) => {
    switch(props.options?.type) {
        case 'col':
            return <StyledSkeletonCol {...props} ref={ref}/>
        case 'circle':
            return <StyledSkeletonircle {...props} ref={ref}/>
        default:
            return <StyledSkeletonCol {...props} ref={ref}/>
    }
}

const Skeleton = forwardRef((props: ISkeletonProps, ref: React.Ref<HTMLSpanElement>) => {
    return (
        resolveSkeletonType(props, ref)
    )
});

export default Skeleton;