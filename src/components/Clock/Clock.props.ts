import { IHeadingOptions } from "../Basic/Heading/Heading.props";

export interface IClockProps {
    endtime: string;
    labelType?: 'lower' | 'upper';
    labelOptions?: IHeadingOptions;
    clockOptions?: IHeadingOptions;
    events?: IClockEvents;
}

interface IClockEvents {
    /**
     * Triggered when time ends
     */
    onNoTimeRemaining?: () => void;
    /**
     * Triggered on 0 days
     */
    onNoDaysRemaining?: () => void;
    /**
     * Triggered on 0 hours
     */
    onNoHourRemaining?: () => void;
    /**
     * Triggered on 0 minutes
     */
    onNoMinutesRemaining?: () => void;
}
