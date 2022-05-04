import React from 'react';
import { IButtonProps, ButtonStyleMap } from "./Button.props";
import { ButtonStyle } from "../../models/Button";

const Button = (props: IButtonProps) => {

    return (
        <>
            <button 
                className={ButtonStyleMap.get(props.options?.buttonType ? props.options.buttonType : ButtonStyle.DEFAULT)}
                disabled={props.data.disabled}
                onClick={props.data.disabled ? undefined : props.events?.onClick}
                style={props.options?.styles}
            >
                {props.data.buttonText}
            </button>
        </>
    )
}

export default Button;