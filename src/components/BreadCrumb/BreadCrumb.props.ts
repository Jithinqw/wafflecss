export interface IBreadCrumbProps {
    data: IBreadCrumbData[];
    events?: IBreadCrumbEvents;
}

interface IBreadCrumbData {
    /**
     * Text for displaying in the crumb
     * @type {string}
     */
    displayText: string;
}

interface IBreadCrumbEvents {
    /**
     * Event triggers once 
     * user clicks on the 
     * bread crumb.
     */
    onClick?:() => void;
}
