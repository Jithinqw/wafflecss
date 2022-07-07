import React from "react";
import styled from "styled-components";
import { colorPalette, commonConstant } from "../../../../models/constants";
import { IPriceLabelProps } from "./PriceLabel.props";

const StyledRecurringLabel = styled.strong<IPriceLabelProps>`
    font-family: ${props => props.options?.fontFamily ? props.options?.fontFamily : commonConstant.fontFamily};
    font-size: ${props => props.options?.fontSize ? props.options?.fontSize : '1.5rem'};
    font-style: bold;
    line-height: 1.6;
    color: ${props => props.options?.color ? props.options.color : colorPalette.defaultBlackColor};
`;

const StyledPriceLabel = styled.strong<IPriceLabelProps>`
    font-family: ${props => props.options?.fontFamily ? props.options?.fontFamily : commonConstant.fontFamily};
    font-size: ${props => props.options?.fontSize ? props.options?.fontSize : '1.5rem'};
    font-style: bold;
    line-height: 1.6;
    color: ${props => props.options?.color ? props.options.color : colorPalette.defaultBlackColor};
`;

const StyledStrikeLabel = styled.span<IPriceLabelProps>`
    font-family: ${props => props.options?.fontFamily ? props.options?.fontFamily : commonConstant.fontFamily};
    font-size: ${props => props.options?.fontSize ? props.options?.fontSize : '1rem'};
    font-style: normal;
    line-height: 1;
    text-decoration: line-through;
    color: ${props => props.options?.color ? props.options.color : colorPalette.defaultGreyColor};
`;

/**
 * @function resolvePriceLabel
 * @param isStrikethrough 
 */
const resolvePriceLabel = (isStrikethrough: boolean, props: IPriceLabelProps) => {
    if(!isStrikethrough) {
        return(
            <StyledPriceLabel {...props}>
                {props.data.currencySymbol + (
                    props.data.price).toFixed(props.data.precision).toString().toLocaleLowerCase() + ' '
                }
                <StyledRecurringLabel {...props}>
                    {props.data.recurringLabel}
                </StyledRecurringLabel>
            </StyledPriceLabel>
        )
    } else {
        return (
            <StyledStrikeLabel {...props}>
                {props.data.currencySymbol + (
                    props.data.price).toFixed(props.data.precision).toString().toLocaleLowerCase() + ' '
                    + props.data.recurringLabel
                }
            </StyledStrikeLabel>
        )
    }
}

const PriceLabel = (props: IPriceLabelProps) => {
    const isStrikethrough = props.options?.isStrikethrough ? props.options?.isStrikethrough : false;

    return (
        resolvePriceLabel(isStrikethrough, props)
    )
}

export default PriceLabel;
