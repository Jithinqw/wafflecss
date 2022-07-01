export interface IToastProps {
    data: IToastData;
    events?: IToastEvents;
}

interface IToastData {
    showToast?: boolean;
    displayText: string;
    delay?: number;
}

interface IToastEvents {
    onDismiss?: () => void;
}