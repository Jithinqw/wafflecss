import React, { forwardRef } from "react"
import styled from "styled-components"
import { 
    colorPalette, 
    containerConstants 
} from "../../../utils/constants"
import { IContainerProps } from "./Container.props"

/**
 * @function resolveContainerWidth
 * @param {'sm' | 'md' | 'lg'} containerWidth 
 * @returns {string}
 */
const resolveContainerWidth = (containerWidth: 'sm' | 'md' | 'lg'):string => {
    switch(containerWidth) {
        case 'sm':
            return containerConstants.mdMaxWidth;
        case 'md':
            return containerConstants.mdMaxWidth;
        case 'lg':
            return containerConstants.lgMaxWidth;
        default:
            return containerConstants.mdMaxWidth;
    }
}

const StyledContainer = styled.div<IContainerProps>`
    width: 100%;
    margin-inline: auto;
    max-width: ${props => props.options?.size ? resolveContainerWidth(props.options?.size) : resolveContainerWidth('md')};
    background-color: ${props => props.options?.backgroundColor ? props.options?.backgroundColor : colorPalette.defaultColor};
    padding-inline: ${containerConstants.paddingInline};
`;

const Container = forwardRef<HTMLDivElement, IContainerProps>((
        props: IContainerProps, 
        ref: React.Ref<HTMLDivElement>
    ):JSX.Element => {

    return (
        <StyledContainer ref={ref} {...props}>
            {props.data.children}
        </StyledContainer>
    )
});

export default Container;
