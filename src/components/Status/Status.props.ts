export interface IStatusProps {
    options?: IStatusOptions;
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
}

interface IStatusEvents {
    onClick?:() => void;
}