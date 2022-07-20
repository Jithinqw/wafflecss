import { ICheckboxData } from "../../../../models/defaultStyle";

export interface ICheckboxProps {
    data: ICheckboxData;
    events?: ICheckboxEvents;
    options?: ICheckboxOptions;
}

interface ICheckboxEvents {
    /**
     * @event onCheckboxChange
     * @param {boolean} isChecked
     * @returns {void}
     */
    onCheckboxChange(isChecked: boolean): void;
}

interface ICheckboxOptions {
    /**
     * @type {'sm' | 'md' | 'lg'}
     * which varient to render
     */
    variant?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     * color of border 
     */
    borderColor?: string;
    /**
     * @type {string}
     * color of background color
     */
    bgColor?: string;
    /**
     * @type {string}
     */
    checkboxLabel?: string;
}