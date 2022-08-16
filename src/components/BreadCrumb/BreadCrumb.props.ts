export interface IBreadCrumbProps {
    data: IBreadCrumbData[];
    events?: IBreadCrumbEvents;
    options?: IBreadCrumbOptions;
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

interface IBreadCrumbOptions {
    /**
     * Seperator for breadcrumb
     * defaults to '/'
     * @type {string}
     * @default /
    */
    seperator?: string;
    /**
     * Size of the seperator
     */
    seperatorSize?: string;
    /**
     * Seperator color
     * @type {string}
     * @default #161616
     */
    color: string;
    /**
     * @type {string}
     */
    className?: string;
    /**
     * @type {string}
     */
    linkSize?: 'sm' | 'md' | 'lg';
}