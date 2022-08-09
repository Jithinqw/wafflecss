export interface ICounterProps {
    data: ICounterData;
    events?: ICounterEvents;
    options?: ICounterOptions;
}

interface ICounterData {
    /**
     * @type {string}
     * display text to render
     */
    displayText: string;
}

interface ICounterEvents {
    /**
     * trigger an event if 
     * click on counter component
     */
    onClick?:() => void;
}

interface ICounterOptions {
    /**
     * @type {'primary' | 'dark'}
     * type of counter to render
     */
    counterType?: 'primary' | 'dark';
    /**
     * @type {string}
     */
    className?: string;
}