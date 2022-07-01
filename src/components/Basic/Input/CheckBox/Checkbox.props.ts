export interface ICheckboxProps {
    data: ICheckboxData;
    events?: ICheckboxEvents;
    options?: ICheckboxOptions;
}

interface ICheckboxData {
    displayText: string;
    value: string
}

interface ICheckboxEvents {
    onCheckboxChange(isChecked: boolean): void;
}

interface ICheckboxOptions {
    checkboxOption?: 'columncheckbox'
}