export interface ILabelProps {
    data: ILabelData;
    options?: ILabelOptions;
}

interface ILabelData {
    /**
     * @type {string}
     * display text for label
     */
    displayText: string;
}

interface ILabelOptions {
    /**
     * @type {'sm' | 'md' | 'lg'}
     * size of label
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     * color of label
     */
    color?: string;
    /**
     * @type {string}
     * font size of label
     */
    fontSize?: string;
    /**
     * @type {string}
     * font family of label
     */
    fontFamily?: string;
     /**
     * @type {string}
     * id of label
     */
    id?: string;
}