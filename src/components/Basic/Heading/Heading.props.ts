export interface IHeadingProps {
    data: IHeadingData;
    events?: IHeadingEvents;
    options?: IHeadingOptions;
}

interface IHeadingData {
    /**
     * Text to display on heading
     * @type {string}
     */
    headingText: string;
    /**
     * Id for Heading
     * @type {string}
     */
    id?: string;
}

interface IHeadingEvents {
    /**
     * Trigger for click on heading
     * @type {object}
     */
    onClick?:() => void;
}

export interface IHeadingOptions {
    /**
     * @type {'italics' | 'normal' | 'oblique'}
     * text style for heading
     */
    style?: 'italics' | 'normal' | 'oblique';
    /**
     * @type {'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold'}
     * Text weight for heading
     */
    weight?: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold';
    /**
     * @type {'normal' | 'small' | 'extrasmall' | 'large' | 'extralarge'}
     * Text size
     */
    size?: 'normal' | 'small' | 'extrasmall' | 'large' | 'extralarge';
    /**
     * @type {string}
     * Color for heading
     */
    headingColor?: string;
}