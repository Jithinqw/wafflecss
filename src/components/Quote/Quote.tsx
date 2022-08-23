import React, { forwardRef } from "react";
import styled from "styled-components";
import { colorPalette, commonConstant } from "../../utils/constants";
import { IQuoteProps } from "./Quote.props";

const StyledQoute = styled.blockquote<IQuoteProps>`
    font-family: ${commonConstant.fontFamily};
    border-left: 0px solid ${colorPalette.defaultPrimaryButtonColor};
    padding-left: 1rem;
    font-style: italic;
    opacity: 0.9;
`;

const StyledFigure = styled.figure`
    border: 1px solid ${colorPalette.defaultGreyColor};
    border-left-width: .20rem;
    border-radius: .25rem;
    border-left-color: ${colorPalette.defaultPrimaryButtonColor};
    background-color: ${colorPalette.defaultWhite};
    border-radius: 12px;
`;

const StyledText = styled.p`
    font-family: ${commonConstant.fontFamily};
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Quote = forwardRef((props: IQuoteProps, ref: React.Ref<HTMLQuoteElement>) => {

    const onClickEventTrigger = () => {
        if(props.onClick) {
            return props.onClick();
        }
    }

    return (
        <StyledFigure 
            ref={ref} 
            onClick={onClickEventTrigger}
            id={props?.id}
            className={props?.className}
        >
            <StyledQoute {...props}>
                { props.displayNode &&
                    <StyledText>
                        {props.displayNode}
                    </StyledText>
                }
            </StyledQoute>
        </StyledFigure>
    )
});

export default Quote;