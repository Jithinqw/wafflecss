import React from "react";

export interface IAnnouncementProps {
    data: IAnnouncementData;
    events?: IAnnouncementEvents;
    options?: IAnnouncementOptions;
}

interface IAnnouncementData {
    /**
     * @type {string | React.ReactNode}
     */
    displayNode: string | React.ReactNode;
    /**
     * @type {string}
     * Announcement close button cta label.
     */
    closeCTA?: string;
    /**
     * @type {string}
     * background color of Announcement.
     */
    bgColor?: string;
    /**
     * @type {string}
     * color of Announcement.
     */
    color?: string;
}

interface IAnnouncementEvents {
    /**
     * @type {Function}
     * Trigger callback on Dismiss
     * CTA is clicked.
     */
    onDismiss?:() => void;
}

interface IAnnouncementOptions {
    /**
     * @type {string}
     * additional CSS class.
     */
    className?: string;
    /**
     * @type {string}
     * additional CSS Id.
     */
    id?: string;
}