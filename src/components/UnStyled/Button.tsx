import React from "react"
import { IStyleOptions } from "../../models/defaultStyle";
import { IButtonProps } from "../Basic/Button/Button.props"

interface RemoveButtonProps {
    options: {
        size: 'xs' | 'sm' | 'md' | 'lg';
        buttonType?: 'button' | 'submit' | 'reset';
        variants?: 'default' | 'danger' | 'success' | 'primary';
        style?: IStyleOptions;
    }
}

interface UnstyledButtonProps extends Omit<IButtonProps, keyof RemoveButtonProps> {
    className?: string;
}

const UnstyledButton = (props: UnstyledButtonProps) => {

    
    /**
     * @function onClickEvent
     * @returns {void}
     */
     const onClickEvent = ():void => {
        if(props.events?.onClick && !props.data.isDisabled) {
            return props.events.onClick();
        }
    }

    /**
     * @function onFocusEvent
     * @returns {void}
     */
    const onFocusEvent = ():void => {
        if(props.events?.onFocus) {
            return props.events.onFocus();
        }
    }

    /**
     * @function onEnterKeyPressed
     * @param {React.KeyboardEvent<HTMLButtonElement>} e 
     * @returns {void}
     */
    const onEnterKeyPressed = (e: React.KeyboardEvent<HTMLButtonElement>):void => {
        if(
            props.events?.onKeyDown && 
            e.key.toLowerCase() === 'enter'
        ) {
            e.preventDefault();
            return props.events.onKeyDown();
        }
    }

    return (
        <button
            disabled={props.data.isDisabled ? props.data.isDisabled : false}
            onClick={onClickEvent}
            onFocus={onFocusEvent}
            onKeyDown={onEnterKeyPressed}
            id={props.data.id}
            role={'button'}
            className={props?.className}
        >
            {props.data.displayText}
        </button>
    )
}

export default UnstyledButton;
