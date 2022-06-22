export interface ISnackBarProps {
    data: ISnackBarData;
    events?: ISnackEvents;
}

interface ISnackBarData {
    isVisible: boolean;
    displayText?: string;
    children?: React.ReactNode;
}

interface ISnackEvents {
    onClick?:() => void;
}