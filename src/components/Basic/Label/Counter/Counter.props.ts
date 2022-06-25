export interface ICounterProps {
    data: ICounterData;
    events?: ICounterEvents;
    option?: ICounterOptions;
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