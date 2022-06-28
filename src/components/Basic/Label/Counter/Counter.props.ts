export interface ICounterProps {
    data: ICounterData;
    events?: ICounterEvents;
    options?: ICounterOptions;
}

interface ICounterData {
    displayText: string;
}

interface ICounterEvents {
    onClick?:() => void;
}

interface ICounterOptions {
    counterType?: 'primary' | 'dark'
}