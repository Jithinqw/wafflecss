import React from "react";

export interface IAlertProps {
    data: IAlertData;
    events?: IAlertEvents;
    options?: IAlertOptions;
}

interface IAlertEvents {
    /**
     * trigger event if click on alert
     */
    onBodyClick?:() => void;
}

interface IAlertData {
    /**
     * Text to display
     */
    displayText: string | React.ReactNode;
}

interface IAlertOptions {
    /**
     * type of alert variant to display
     */
    variants?: 'error' | 'success' | 'warning' | 'info' | 'dark';
}