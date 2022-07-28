import React from "react";
import styled from "styled-components";
import { ITableProps } from "./Table.props";

const StyledContainer = styled.div`
    box-shadow: 0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    overflow-x: auto;
    position: relative;
    border-radius: 0.5rem;
`;

const StyledTable = styled.table`
    font-size: .875rem;
    line-height: 1.25rem;
    text-align: left;
    width: 100%;
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
    display:table;
`;

const StyledTableHead = styled.thead`
    color: rgb(156 163 175/1);
    background-color: rgb(55 65 81/1);
    font-size: .75rem;
    line-height: 1rem;
    display: table-header-group;
    vertical-align: middle;
`;

const StyledTableHeadItem = styled.th`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
`;

const Table = (props: ITableProps) => {
    return (
        <StyledContainer>
            <StyledTable>
                <StyledTableHead>
                    <tr>
                        <StyledTableHeadItem scope="col">ssdfsdf</StyledTableHeadItem>
                        <StyledTableHeadItem scope="col">ssdfsdf</StyledTableHeadItem>
                        <StyledTableHeadItem scope="col">ssdfsdf</StyledTableHeadItem>
                    </tr>
                </StyledTableHead>
                <tbody>
                    
                </tbody>
            </StyledTable>
        </StyledContainer>
    )
}

export default Table;
