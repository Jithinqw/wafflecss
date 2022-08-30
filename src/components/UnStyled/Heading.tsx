import React from "react";
import { IHeadingProps } from "../Basic/Heading/Heading.props";

interface IUnstyledHeading extends IHeadingProps {
    headingLevel: number;
}

const UnstyledHeading = (props: IUnstyledHeading) => {

    /**
     * @function onClickEvent
     * @returns {void}
     */
     const onClickEvent = (): void => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    const resolveHeadingLevel = (
            level: number, 
            props: IHeadingProps
        ) => {
        switch(level) {
            case 1:
                return (
                    <h1
                        role={'heading'}
                        id={props.data?.id}
                        onClick={onClickEvent}
                        className={props.options?.className}
                    >
                        {props.data.headingText}
                    </h1>
                )
            case 2:
                return (
                    <h1
                        role={'heading'}
                        id={props.data?.id}
                        onClick={onClickEvent}
                        className={props.options?.className}
                    >
                        {props.data.headingText}
                    </h1>
                )
            case 3:
                return (
                    <h1
                        role={'heading'}
                        id={props.data?.id}
                        onClick={onClickEvent}
                        className={props.options?.className}
                    >
                        {props.data.headingText}
                    </h1>
                )
            case 4:
                return (
                    <h1
                        role={'heading'}
                        id={props.data?.id}
                        onClick={onClickEvent}
                        className={props.options?.className}
                    >
                        {props.data.headingText}
                    </h1>
                )
            case 5:
                return (
                    <h1
                        role={'heading'}
                        id={props.data?.id}
                        onClick={onClickEvent}
                        className={props.options?.className}
                    >
                        {props.data.headingText}
                    </h1>
                )
                case 6:
                    return (
                        <h1
                            role={'heading'}
                            id={props.data?.id}
                            onClick={onClickEvent}
                            className={props.options?.className}
                        >
                            {props.data.headingText}
                        </h1>
                    )
                default:
                    return (
                        <h1
                            role={'heading'}
                            id={props.data?.id}
                            onClick={onClickEvent}
                            className={props.options?.className}
                        >
                            {props.data.headingText}
                        </h1>
                    )
        }
    }

    return (
        resolveHeadingLevel(props.headingLevel, props)
    )
}

export default UnstyledHeading;
