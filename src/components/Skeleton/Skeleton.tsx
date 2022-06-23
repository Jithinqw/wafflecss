import React from "react";
import styled from "styled-components";
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

const StyledSkeletonCol = styled.span<ISkeletonProps>`
    display: inline-block;
    min-height: ${props => props.options?.height ? resolveHeight(props.options?.height) : resolveHeight('sm')};
    vertical-align: middle;
    cursor: wait;
    background-color: ${props => props.options?.color ? props.options.color : 'grey'};
    opacity: .5;
    webkit-animation: placeholder-glow 2s ease-in-out infinite;
    animation: placeholder-glow 2s ease-in-out infinite;
`;

const StyledSkeletonircle = styled.span<ISkeletonProps>`
    background-color: ${props => props.options?.color ? props.options.color : 'grey'};
    width: ${props => props.options?.height ? resolveCircleRadius(props.options?.height) : resolveCircleRadius('sm')};
    height:${props => props.options?.height ? resolveCircleRadius(props.options?.height) : resolveCircleRadius('sm')};;
    border-radius: 50%;
    opacity: .5;
    webkit-animation: placeholder-glow 2s ease-in-out infinite;
    animation: placeholder-glow 2s ease-in-out infinite;
`;

/**
 * @function resolveSkeletonType
 * @param {ISkeletonProps} props 
 * @returns {StyledComponent}
 */
const resolveSkeletonType = (props: ISkeletonProps) => {
    switch(props.options?.type) {
        case 'col':
            return <StyledSkeletonCol {...props}/>
        case 'circle':
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