export interface IPriceLabelProps {
    data: IPriceLabelData;
    options?: IPriceLabelOption;
}

interface IPriceLabelData {
    /**
     * @type {string}
     * currency symbol to render
     * eg: $, €, ₹
     */
    currencySymbol?: string;
    /**
     * @type {number}
     * price to render
     */
    price: number;
    /**
     * @type {number}
     * If price is floating
     * number, precision to render
     */
    precision: number;
    /**
     * @type {string}
     * a recurring label to render
     * eg: /mo., /yr., /dy.
     */
    recurringLabel: string;
}

interface IPriceLabelOption {
    /**
     * @type {boolean}
     * Is the label a strikethrough
     * price
     */
    isStrikethrough: boolean;
    /**
     * @type {string}
     * color of text
     */
    color?: string;
    /**
     * @type {string}
     * font family of price label
     */
    fontFamily?: string;
    /**
     * @type {string}
     * font size of price label
     */
    fontSize?: string;
}
