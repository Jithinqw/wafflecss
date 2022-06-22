import React from "react";

export interface IBackdropProps {
    data?: IBackdropData;
}

interface IBackdropData {
    isVisible: boolean;
    children: React.ReactNode;
}
