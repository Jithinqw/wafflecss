import React from "react";

export interface IAnnouncementProps {
    data: IAnnouncementData;
    events?: IAnnouncementEvents;
}

interface IAnnouncementData {
    displayNode: React.ReactNode;
}

interface IAnnouncementEvents {
    onDismiss?:() => void;
}
