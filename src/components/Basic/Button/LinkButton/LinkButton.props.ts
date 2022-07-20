export interface ILinkButtonProps {
    data: ILinkButtonData;
    events?: ILinkButtonEvents;
    options?: ILinkButtonOptions;
}

interface ILinkButtonData {
    /**
     * @type {string}
     * Display text for button
     */
    displayText: string;
}

interface ILinkButtonEvents {
    /**
     * @function onClick
     */
    onClick?:() => void;
    /**
     * @function onFocus
     */
    onFocus?:() => void;
}

interface ILinkButtonOptions {
    /**
     * @type {string}
     * Size for button
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     * id for button
     */
    id?: string;
}
