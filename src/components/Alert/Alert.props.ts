export interface IAlertProps {
    data: IAlertData;
    events?: IAlertEvents;
    option?: IAlertOptions;
}

interface IAlertEvents {
    onBodyClick?:() => void;
    onDismiss?:() => void;
}

interface IAlertData {
    displayText: string | HTMLHtmlElement;
}

interface IAlertOptions {
    isDismissable?: boolean;
}