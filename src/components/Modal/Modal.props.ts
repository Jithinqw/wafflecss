import React from "react";

export interface IModalProps {
    data: IModalData;
    events?: IModalEvents;
    options: IModalOptions;
}

interface IModalData {
    /**
     * @type {React.ReactNode}
     * React node to render in 
     * modal heading
     */
    modalHeadingNode?: React.ReactNode;
    /**
     * @type {React.ReactNode}
     * React node to render in 
     * modal body
     */
    modalBodyNode?: React.ReactNode;
    /**
     * @type {React.ReactNode}
     * React node to render in 
     * modal footer
     */
    modalFooterNode?: React.ReactNode;
}

interface IModalEvents {

}

interface IModalOptions {
    isVisible: boolean;
}