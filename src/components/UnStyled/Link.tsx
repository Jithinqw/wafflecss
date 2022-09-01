import React from "react";
import { ILinkProps } from "../Basic/Link/Link.props"

interface RemoveLinkProps {
    options: {
        underline?: 'italics' | 'normal' | 'oblique';
        hoverUnderline?: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold';
        size?: 'sm' | 'md' | 'lg';
        headingColor?: string;
    },
    events: {
        onClick?:() => void;
    }
}

interface UnstyledButtonProps extends Omit<ILinkProps, keyof RemoveLinkProps> {
    className?: string;
    href?: string;
}

const UnStyledLink = (props: UnstyledButtonProps) => {

    return (
        <a 
            className={props?.className}
            role={'link'}
            id={props.data?.id}
            href={props.href ? props.href : '#'}
        >
            {props.data.displayText}
        </a>
    )
}

export default UnStyledLink;
