import React from 'react';
import {AnimationType} from '../../models/Animation';
import { FontSize, TextStyle } from "../../models/Text";
import styles from './Text.module.scss';

export interface ITextProps {
    options?: ITextOptions;
    data: ITextData;
    events?: ITextEvents
}

interface ITextOptions {
    /**
     * fontSizes for text
     */
    fontSize?: FontSize,
    /**
     * fontStyles for text
     */
    fontStyle?: TextStyle,
    /**
     * styles to attach to text
     */
    styles?: React.CSSProperties,
    /**
     * ref to attach to text
     */
    ref?: React.Ref<HTMLElement>,
    /**
     * @todo remove it or add animations 
     */
    animationType?: AnimationType
}

interface ITextData {
    /**
     * display text for textData
     */
    textData?: string
}

interface ITextEvents {
    /**
     * onClick func attach to text component
     */
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * FontSize map
 */
export const FontSizeClassMap = new Map<FontSize, string>([   
    [FontSize.EXTRALARGE, styles.fontExtraLarge],
    [FontSize.EXTRASMALL, styles.fontExtraSmall],
    [FontSize.LARGE, styles.fontLarge],
    [FontSize.REGULAR, styles.fontSizeRegular],
    [FontSize.SMALL, styles.fontSmall]
]);

/**
 * Font style class map
 */
export const FontStyleClassMap = new Map<TextStyle, string>([
    [TextStyle.REGULAR, styles.fontRegular],
    [TextStyle.ITALICS, styles.fontItalics],
    [TextStyle.BOLD, styles.fontBold],
]);