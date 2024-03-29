import React from "react";
import { IStyleOptions } from "../../../../models/defaultStyle";

export default interface ILegalTextProps {
    data: ILegalTextData;
    options?: ILegalTextOptions;
    events?: ILegalTextEvents;
}

interface ILegalTextData {
    /**
     * @type {string}
     * Text to display
     */
    displayText: string | React.ReactNode;
}

interface ILegalTextOptions {
    /**
     * @type {'sm' | 'md' | 'lg'}
     * Legal text size
     */
    legalTextSize?: 'sm' | 'md' | 'lg';
    /**
     * @type {IStyleOptions}
     * Additional style for heading
     */
    style?: IStyleOptions;
    /**
     * @type {string}
     * additional styles passed
     */
    className?: string;
}

interface ILegalTextEvents {
    /**
     * Event to trigger on click of Legal Text
     */
    onClick?:() => void;
}