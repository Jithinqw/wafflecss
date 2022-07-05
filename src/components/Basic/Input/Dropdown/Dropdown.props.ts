export interface IDropdownProps {
    data: IDropdownData;
    options?: IDropdownOptions;
    events?: IDropdownEvents;
}

interface IDropdownData {
    optionData: ISelectOption[];
}

interface IDropdownOptions {
    variants?: 'sm' | 'md' | 'lg';
    color?: string;
    bgColor?: string;
}

interface IDropdownEvents {
    onChange?:(event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface ISelectOption {
    displayText: string;
    value: string;
}