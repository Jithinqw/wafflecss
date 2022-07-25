import React from "react";
import styled from "styled-components";
import { IPromotionalRibbonProps } from "./PromotionRibbon.props";

const StyledRibbon = styled.div<IPromotionalRibbonProps>`
    background-color: ${props => props.options?.backgroundColor ? props.options.backgroundColor : '#0057b8'};
    padding: 0 !important;
    display: flex !important;
    flex-basis: 66.6666667%;
    max-width: 66.6666667%;
    margin-left: 33.3333333%;
    flex: 1 0 auto;
    cursor: ${props => props.events?.onClick ? 'pointer' : 'not-allowed'};
`;

const PromotionRibbon = (props: IPromotionalRibbonProps) => {
    return (
        <StyledRibbon 
            {...props} 
            onClick={props.events?.onClick}
        >
            {props.data?.children}
        </StyledRibbon>
    )
}

export default PromotionRibbon;
