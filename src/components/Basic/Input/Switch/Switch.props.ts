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
     * @todo
     * @type {'ios' | 'android'}
     * which type of switch to render
     */
    variant: 'ios' | 'android';
}

interface ISwitchEvents {
    /**
     * Trigger an event on toggling
     * switch component
     */
    onClick?:() => void;
}