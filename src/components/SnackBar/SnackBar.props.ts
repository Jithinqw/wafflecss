export interface ISnackBarProps {
    data: ISnackBarData;
    events?: ISnackEvents;
}

interface ISnackBarData {
    /**
     * @type {boolean}
     */
    isVisible: boolean;
    /**
     * @type {string}
     */
    displayText?: string;
    /**
     * @type {React.ReactNode}
     */
    children?: React.ReactNode;
}

interface ISnackEvents {
    /**
     * trigger an event 
     * on click on snackbar
     */
    onClick?:() => void;
}