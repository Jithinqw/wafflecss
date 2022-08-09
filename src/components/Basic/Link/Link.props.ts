import { IStyleOptions } from "../../../models/defaultStyle";

export interface ILinkProps {
    data: ILinkData;
    options?: ILinkOptions;
    events?: ILinkEvents;
}

interface ILinkEvents {
    /**
     * trigger an event on 
     * click on link
     */
    onClick?:() => void;
}

interface ILinkData {
    /**
     * @type {string}
     * display text for link
     */
    displayText: string;
}

interface ILinkOptions {
    /**
     * @type {boolean}
     */
    underline?: boolean;
    /**
     * @type {boolean}
     */
    hoverUnderline?: boolean;
    /**
     * @type {IStyleOptions}
     */
    styleOptions?: IStyleOptions;
    /**
     * size of link
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     */
    className?: string;
}