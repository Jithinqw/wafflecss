import React, { memo } from "react";
import styled from "styled-components";
import { ListData } from "../../../models/basicModal";
import { commonConstant } from "../../../models/constants";
import { IListProps } from "./List.props";

interface ListSpace {
    spacing?: string | undefined;
}
const StyledOrderedList = styled.ol`
    list-style-type: decimal;
    margin-inline-start: 1em;
    margin: 0;
    padding: 0;
`;

const StyledListItem = styled.li<ListSpace>`
    border-color: #e2e8f0;
    word-wrap: break-word;
    padding-top: ${props => props.spacing ? props.spacing : ''};
    padding-bottom: ${props => props.spacing ? props.spacing : ''};
    padding-left: ${props => props.spacing ? props.spacing : ''};
    padding-right: ${props => props.spacing ? props.spacing : ''};
    font-family: ${commonConstant.fontFamily}
`;

const StyledUnorderedList = styled.ul`
    list-style-type: initial;
    margin-inline-start: 1em;
    margin: 0;
    padding: 0;
`;

/**
 * @function resolveList
 * @param listType 
 * @param listData 
 * @returns {React.ReactNode}
 */
const resolveList = (listType: 'ordered' | 'unordered', listData: ListData[], spacing?: string) => {
    switch(listType) {
        case 'ordered':
            return (
                <StyledOrderedList>
                    {
                        listData.length > 0 && listData.map((e: ListData, i: number) => {
                            return (
                                <StyledListItem key={i} spacing={spacing}>
                                    {e.listItem}
                                </StyledListItem>
                            )
                        })
                    }
                </StyledOrderedList>
            )
        case 'unordered':
            return (
                <StyledUnorderedList>
                    {
                        listData.length > 0 && listData.map((e: ListData, i: number) => {
                            return (
                                <StyledListItem key={i} spacing={spacing}>
                                    {e.listItem}
                                </StyledListItem>
                            )
                        })
                    }
                </StyledUnorderedList>
            )
        default:
            return (
                <StyledUnorderedList>
                    {
                        listData.length > 0 && listData.map((e: ListData, i: number) => {
                            return (
                                <StyledListItem key={i} spacing={spacing}>
                                    {e.listItem}
                                </StyledListItem>
                            )
                        })
                    }
                </StyledUnorderedList>
            )
    }
}

const List = (props: IListProps) => {
    return (
        resolveList(
            props.options?.listType ? props.options?.listType : 'unordered',
            props.data.listData, props.options?.spacing
        )
    )
}

export default memo(List);
