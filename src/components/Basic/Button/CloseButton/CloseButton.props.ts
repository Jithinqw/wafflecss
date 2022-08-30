export interface ICloseButtonProps {
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {string}
     */
    className?: string;
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
    color?: string;
    /**
     * @type {Function}
     */
    onClick?:() => void;
}