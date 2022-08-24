import React, { forwardRef } from "react";
import styled from "styled-components";
import { commonConstant } from "../../utils/constants";
import { ITableProps } from "./Table.props";

const StyledContainer = styled.div`
    box-shadow: 0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    overflow-x: auto;
    position: relative;
    border-radius: 0.5rem;
    font-family: ${commonConstant.fontFamily};
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
    table-layout: fixed;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTableHead = styled.thead`
    color: rgb(156 163 175/1);
    background-color: rgb(55 65 81/1);
    font-size: .75rem;
    line-height: 1rem;
    display: table-header-group;
    vertical-align: middle;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTablebody = styled.tbody`
    background-color: rgb(255 255 255/1);
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
`;

const StyledTableTr = styled.tr`
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
`;

const StyledTableHeadItem = styled.th`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTableData = styled.td`
    color: rgb(100 116 139/1);
    padding-left: 2rem;
    padding: 1rem;
    border-color: rgb(241 245 249/1);
    border-bottom-width: 1px;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    font-family: ${commonConstant.fontFamily};
`;

const Table = forwardRef((
        props: ITableProps,
        ref: React.Ref<HTMLTableElement>
    ) => {
    return (
        <StyledContainer
            className={props.options?.className}
            id={props.options?.id}
        >
            <StyledTable 
                ref={ref}
                role={'table'}
            >
                <StyledTableHead>
                    <tr>
                        {
                            props.data && props.data.tableHead &&
                            props.data.tableHead.length > 0 &&
                            props.data.tableHead.map((e, i) => {
                                return (
                                    <StyledTableHeadItem 
                                        scope="col"
                                        key={i}
                                        role={'table'}
                                    >
                                        {e.tableTitle}
                                    </StyledTableHeadItem>
                                )
                            })
                        }
                    </tr>
                </StyledTableHead>
                <StyledTablebody>
                    {
                        props.data.tableRowData && 
                        props.data.tableRowData.length > 0 &&
                        props.data.tableRowData.map((e, i) => {
                            return (
                                <StyledTableTr 
                                    key={i} 
                                    role={'table'}
                                >
                                    {
                                        props.data.tableRowData &&
                                        props.data.tableRowData.length > 0 &&
                                        Object.values(e).map((item, index) => {
                                            return (
                                                <StyledTableData 
                                                    key={index}
                                                >
                                                    {item}
                                                </StyledTableData>
                                            )
                                        })
                                    }
                                </StyledTableTr>
                            )
                        })
                    }
                </StyledTablebody>
            </StyledTable>
        </StyledContainer>
    )
})

export default Table;
