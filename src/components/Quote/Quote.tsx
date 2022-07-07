import React from "react";
import styled from "styled-components";
import { IQuoteProps } from "./Quote.props";

const StyledQoute = styled.blockquote<IQuoteProps>`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-inline-start: 0.75rem;
    padding-inline-end: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-left: 4px;
    border-left-color: ${props => props.highlightColor ? props.highlightColor : 'red'};
    background: ${props => props.bgColor ? props.bgColor : 'rgb(254, 235, 200)'};
    margin-top: 1.5rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
`;

const Quote = (props: IQuoteProps) => {
    return (
        <StyledQoute {...props}>
            {props.displayNode}
        </StyledQoute>
    )
}

export default Quote;