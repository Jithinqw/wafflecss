import React from "react";
import { ILinkProps } from "../Basic/Link/Link.props"

interface RemoveLinkProps {
    options: {
        underline?: 'italics' | 'normal' | 'oblique';
        hoverUnderline?: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold';
        size?: 'sm' | 'md' | 'lg';
        headingColor?: string;
    }
}

interface UnstyledButtonProps extends Omit<ILinkProps, keyof RemoveLinkProps> {
    className?: string;
}

const UnStyledLink = (props: UnstyledButtonProps) => {

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
        <a 
            onClick={onClickEvent}
            className={props?.className}
            role={'link'}
            id={props.data?.id}
        >
            {props.data.displayText}
        </a>
    )
}

export default UnStyledLink;
