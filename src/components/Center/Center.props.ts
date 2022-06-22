import React from "react";

export interface ICenterProps {
    data: ICenterData;
    events?: ICenterEvents;
}

interface ICenterData {
    children?: React.ReactNode;
    height?: string;
    width?: string;
    color?: string;
    backgroundColor?: string;
}

interface ICenterEvents {
    onClick?:() => void;
}