import React from "react";

export interface IModalProps {
    data: IModalData;
    events?: IModalEvents;
    options?: IModalOptions;
}

interface IModalData {
    modalHeadingNode?: React.ReactNode;
    modalBodyNode?: React.ReactNode;
    modalFooterNode?: React.ReactNode;
}

interface IModalEvents {

}

interface IModalOptions {

}