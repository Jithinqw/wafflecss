import React, { forwardRef } from "react";
import { IBreadCrumbProps } from "./BreadCrumb.props";
import Stack from "../Layout/Stack/Stack";
import Link from "../Basic/Link/Link";
import styled from "styled-components";

const StyledOrderedList = styled.ol`
    max-height: 9999px;
    padding-left: 25px;
    direction: ltr;
    list-style: none;
    white-space:nowrap;
`;

const StyledListItem = styled.li<IBreadCrumbProps>`
    display: inline-block;
    margin: 0 5px;
    &:after {
        color: ${props => props.options?.color ? props.options.color :'#161616'};
        content: '${props => props.options?.seperator ? props.options.seperator : '/'}';
        font-size: ${props => props.options?.seperatorSize ? props.options.seperatorSize : '24px'};
        margin-left: 0.5rem;
    }
`;

const BreadCrumb = forwardRef((
    props: IBreadCrumbProps, 
    ref: React.Ref<HTMLOListElement>) => {

    const triggerOnClick = () => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    return (
        <Stack>
            <StyledOrderedList 
                ref={ref} 
                className={props.options?.className}
            >
                {props.data && props.data.length > 0 && props.data.map((e, i) => {
                    return (
                        <StyledListItem {...props} key={i}>
                            <Link 
                                data={{
                                    displayText: e.displayText
                                }}
                                events={{
                                    onClick: triggerOnClick
                                }}
                                options={{
                                    size: props.options?.linkSize ? props.options.linkSize : 'md'
                                }}
                                key={i}
                            />
                        </StyledListItem>
                    )
                })}
            </StyledOrderedList>
        </Stack>
    )
});

export default BreadCrumb;
