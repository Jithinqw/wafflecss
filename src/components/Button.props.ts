import { CSSProperties } from "react";
import { ButtonStyle } from "../models/Button";
import * as styles from './Button.module.scss';

export interface IButtonProps {
    data: IButtonData,
    options?: IButtonOptions,
    events?: IButtonEvents
}

export interface IButtonEvents {
    /**
     * Attach a onClick function to a button
     */
    onClick(): void;
}

export interface IButtonOptions {
    /**
     * Pass CSS classes to button.
     * @interface CSSProperties
     */
    styles?: CSSProperties,
    /**
     * Add button type
     * @type {ButtonStyle}
     */
    buttonType: ButtonStyle
}

export interface IButtonData {
    /**
     * Text to display in button
     */
    buttonText: string,
    /**
     * Is button disabled
     * @type {boolean}
     */
    disabled?: boolean
}

/**
 * @description Different types of button 
 * from different vendors.
 * 
 */
export const ButtonStyleMap = new Map<ButtonStyle, string>([
    [ButtonStyle.DEFAULT, styles.buttonRoot],
    [ButtonStyle.DRIBBLE, styles.buttonDribble],
    [ButtonStyle.LINKEDIN, styles.buttonLikedIn],
    [ButtonStyle.STACKOVERFLOW, styles.buttonStackOverflow],
    [ButtonStyle.STACKOVERFLOWDEFAULT, styles.buttonStackoverflowDefault],
    [ButtonStyle.STRIPE, styles.buttonStripe],
    [ButtonStyle.MACOSPRIMARY, styles.buttonMacOsPrimary],
    [ButtonStyle.BIGSURPRIMARY, styles.bigSurPrimary],
    [ButtonStyle.BIGSURGREY, styles.bigSurGrey],
    [ButtonStyle.BIGSURWHITE, styles.bigSurWhite],
    [ButtonStyle.AIRBNB, styles.buttonAirbnb],
    [ButtonStyle.COINBASE, styles.buttonCoinbase],
])