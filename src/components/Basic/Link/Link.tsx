import React, { forwardRef, memo } from "react";
import styled from "styled-components";
import { 
    colorPalette, commonConstant
} from "../../../utils/constants";
import { ILinkProps } from "./Link.props";

/**
 * @function resolveLinkFontWeight
 * @param {'sm' | 'md' | 'lg'} linkWeight 
 * @returns {string}
 */
const resolveLinkFontWeight = (linkWeight: 'sm' | 'md' | 'lg'):string => {
    switch(linkWeight) {
        case 'sm':
            return '0.75rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '1.5rem';
        default:
            return '1rem';
    }
}

const StyledLink = styled.span<ILinkProps>`
    margin: 0px;
    box-sizing: inherit;
    font-family: ${
        props => props.options?.styleOptions?.fontFamily ? props.options?.styleOptions?.fontFamily : commonConstant.fontFamily
    };
    font-weight: ${commonConstant.fontWeight};
    font-size: ${
        props => props.options?.size ? resolveLinkFontWeight(props.options?.size) : resolveLinkFontWeight('md')
    };
    line-height: 1.5;
    cursor: ${commonConstant.cursorPointer};
    color: ${
        props => props.options?.styleOptions?.color ? props.options?.styleOptions?.color?.toString() : colorPalette.defaultDefaultLinkColor
    };
    letter-spacing: 0.00938em;
    text-decoration: ${
        props => props.options?.underline ? commonConstant.underLineTextDecoration : commonConstant.defaultTextDecoration
    };
    &:hover {
        text-decoration: ${
            props => props.options?.hoverUnderline ? commonConstant.underLineTextDecoration : commonConstant.defaultTextDecoration
        };
    }
    &:focus {
        border-color: black;
    }
`;

const Link = forwardRef((props: ILinkProps, ref: React.Ref<HTMLSpanElement>) => {

    /**
     * @function onClickEvent
     * @returns {void}
     */
    const onClickEvent = ():void => {
        if(
            props.events?.onClick &&
            props.data && !props.data.isDisabled
        ) {
            return props.events.onClick();
        }
    }

    return (
        <StyledLink 
            {...props} 
            onClick={onClickEvent}
            ref={ref}
            className={props.options?.className}
            role={'link'}
            id={props.data?.id}
        >
            {props.data.displayText}
        </StyledLink>
    )
});

export default memo(Link);
