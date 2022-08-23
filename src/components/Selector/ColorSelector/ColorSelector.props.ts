export interface IColorPickerProps {
    data: IColorPickerData,
    events?: IColorPickerEvents,
    options?: IColorPickerOptions
}

interface IColorPickerEvents {
    /**
     * @type {Function}
     */
    onClick?:() => void;
    /**
     * @type {Function}
     */
    onChange?:(isChecked: boolean, currentColor: string) => void;
}

interface IColorPickerData {
    /**
     * @type {boolean}
     */
    selected: boolean;
    /**
     * @type {string}
     */
    color?: string;
    /**
     * @type {string}
     */
    accessability?: string;
}

interface IColorPickerOptions {
    /**
     * @type {boolean}
     */
    disabled?: boolean;
    /**
     * @type {number}
     */
    key?: number;
    /**
     * @type {sm | md | lg}
     */
    colorSize?: 'sm' | 'md' | 'lg';
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
    borderColor?: string;
}