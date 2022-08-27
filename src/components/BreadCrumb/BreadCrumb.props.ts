import React from "react";

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
    displayText: string | React.ReactNode;
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
     * @type {string}
     * @default /
    */
    seperator?: string;
    /**
     * Size of the seperator
     * @type {string}
     */
    seperatorSize?: string;
    /**
     * Seperator color
     * @type {string}
     * @default #161616
     */
    color: string;
    /**
     * additional CSS class
     * @type {string}
     */
    className?: string;
    /**
     * Additional ID for HTML
     */
    id?: string;
    /**
     * @type {string}
     * size of the link
     */
    linkSize?: 'sm' | 'md' | 'lg';
}