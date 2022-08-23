import React from "react";
import styled from "styled-components";
import { IStatusProps } from "./Status.props";

const StyledStatusRounded = styled.span<IStatusProps>`
    display: inline-block;
    width: ${props => props.options?.width ? props.options?.width : '8px'};
    height: ${props => props.options?.height ? props.options?.height : '8px'};
    background: ${props => props.options?.bgColor ? props.options?.bgColor : '#0070f3'};
    border-radius: 50%;
`;

const StyledStatusRect = styled.rect<IStatusProps>`
    width: ${props => props.options?.width ? props.options.width : '10px'};
    height: ${props => props.options?.height ? props.options?.height : '10px'};
    fill: ${props => props.options?.bgColor ? props.options?.bgColor : '#0070f3'};
    cursor: pointer;
`;

/**
 * @function resolveStatusType
 * @description Decide which status to resolve
 * @param {rounded | rect} type 
 * @param {IStatusProps} props 
 * @returns {React.ReactNode}
 */
const resolveStatusType = (
        props: IStatusProps
    ) => {
    switch(props.options.variants) {
        case 'rounded':
            return (
                <StyledStatusRounded
                    onClick={props.events?.onClick}
                    {...props}
                    role={'status'}
                    id={props.options?.id}
                    className={props.options?.className}
                />
            )
        case 'rect':
            return (
                <svg>
                    <StyledStatusRect 
                        onClick={props.events?.onClick}
                        {...props}
                        role={'status'}
                        id={props.options?.id}
                        className={props.options?.className}
                    />
                </svg>
            )
        default:
            return (
                <StyledStatusRounded
                    onClick={props.events?.onClick}
                    {...props}
                    role={'status'}
                    id={props.options?.id}
                    className={props.options?.className}
                />
            )
    }
}

const Status = (props: IStatusProps) =>{
    return (
        resolveStatusType(props)
    )
}

export default React.memo(Status);
