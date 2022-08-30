import React from "react";
import { ILinkProps } from "../Basic/Link/Link.props"

const UnStyledLink = (props: ILinkProps) => {

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
            className={props.options?.className}
            role={'link'}
            id={props.data?.id}
        >
            {props.data.displayText}
        </a>
    )
}

export default UnStyledLink;
