export interface ISwitchProps {
    options?: ISwitchOptions;
    events?: ISwitchEvents;
}

interface ISwitchOptions {
    size?: 'sm' | 'md' | 'lg';
    variant: 'ios' | 'android';
}

interface ISwitchEvents {
    onClick?:() => void;
}