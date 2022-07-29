import React from "react";

export interface ICardProps {
    data: ICardData;
    events?: ICardEvents;
    options?: ICardOptions;
}

interface ICardData {
    cardTitleNode: React.ReactNode;
    cardBodyNode: React.ReactNode;
    cardFooterNode: React.ReactNode;
}

interface ICardEvents {

}

interface ICardOptions {

}