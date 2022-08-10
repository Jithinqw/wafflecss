export interface ISwitchProps {
    options?: ISwitchOptions;
    events?: ISwitchEvents;
}

interface ISwitchOptions {
    /**
     * @todo
     * @type {'sm' | 'md' | 'lg'}
     * size of switch
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @type {string}
     */
    className?: string;
}

interface ISwitchEvents {
    /**
     * Trigger an event on toggling
     * switch component
     */
    onChange?:() => void;
}