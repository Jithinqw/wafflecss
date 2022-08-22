import { ISelectOption } from "../../../../models/defaultStyle";

export interface IDropdownProps {
    data: IDropdownData;
    options?: IDropdownOptions;
    events?: IDropdownEvents;
}

interface IDropdownData {
    /**
     * @type {Array<ISelectOption>}
     * Data for rendering dropdown
     */
    optionData: ISelectOption[];
    /**
     * @type {boolean}
     * Toggle value for 
     * disabling dropdown
     * Will disable dropdown,
     * convert cursor to not-allowed
     */
    disabled?: boolean;
}

interface IDropdownOptions {
    /**
     * @type {'sm' | 'md' | 'lg'}
     * which varient to render
     * @todo
     */
    variants?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     * optional color
     */
    color?: string;
    /**
     * @type {string}
     * optional background color
     */
    bgColor?: string;
    /**
     * @type {string}
     */
    className?: string;
    /**
     * @type {string}
     */
    id?: string;
}

interface IDropdownEvents {
    /**
     * @event onChange
     * @param {React.ChangeEvent<HTMLSelectElement>} event
     * @returns {void}
     */
    onChange?:(event: string) => void;
}

