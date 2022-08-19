export interface IStatusProps {
    options: IStatusOptions;
    events?: IStatusEvents;
}

interface IStatusOptions {
    /**
     * @type {string}
     */
    height?: string;
    /**
     * @type {string}
     */
    width?: string;
    /**
     * @type {string}
     */
    bgColor?: string;
    /**
     * @type {string}
     */
    variants?: 'rounded' | 'rect';
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {string}
     */
    className?: string;
}

interface IStatusEvents {
    onClick?:() => void;
}