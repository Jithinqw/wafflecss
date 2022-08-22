export interface IClockProps {
    /**
     * @type {string}
     * Time in the future, timer 
     * will timer from future till
     * today.
     */
    endtime: string;
    /**
     * @type {lower / upper}
     * Control the label of timer
     */
    labelType?: 'lower' | 'upper';
    /**
     * @type {TimerColor}
     * Control timer color palette.
     */
    colorSquash?: TimerColor;
    /**
     * @type {string}
     */
    className?: string;
    /**
     * @type {string}
     */
    id?: string;
}

interface TimerColor {
    timerContainerColor?: string;
    timeWrapperColor?: string;
    timerColor?: string;
}