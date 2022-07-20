export default interface IBadgeProps {
    data: IBadgeData;
    options?: IBadgeOptions;
    events?: IBadgeEvents;
}

interface IBadgeData {
    /**
     * @type {string}
     * text to display
     */
    displayText: string;
    /**
     * @type {string}
     * background color 
     */
    background?: string;
}

interface IBadgeEvents {
    /**
     * trigger an event on click
     */
    onClick?:() => void;
}

interface IBadgeOptions {
    /**
     * @type {'subtle' | 'solid' | 'outline'}
     * badge variant
     * @todo
     */
    variant?: 'subtle' | 'solid' | 'outline';
    /**
     * @type {'warn' | 'success' | 'danger'}
     * color for badge
     */
    color?: 'warn' | 'success' | 'danger';
}