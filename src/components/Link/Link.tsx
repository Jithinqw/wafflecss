import React from "react";
import styled from "styled-components";
import { ILinkProps } from "./Link.props";

const StyledLink = styled.span<ILinkProps>`
    margin: 0px;
    box-sizing: inherit;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    color: ${props => props.options?.color ? props.options?.color?.toString() : 'rgb(25, 118, 210)'};
    letter-spacing: 0.00938em;
    text-decoration: ${props => props.options?.underline ? 'underline' : 'none'};
    &:hover {
        text-decoration: ${props => props.options?.hoverUnderline ? 'underline' : 'none'};
    }
`;

const Link = (props: ILinkProps) => {
    return (
        <StyledLink 
            {...props} 
            onClick={props.events?.onClick}
        >
            {props.data.displayText}
        </StyledLink>
    )
}

export default Link;