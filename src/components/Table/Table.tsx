import React, { forwardRef } from "react";
import styled from "styled-components";
import { commonConstant } from "../../utils/constants";
import { ITableProps } from "./Table.props";

/**
 * @function resolveTableTheme
 * @param {'light' | 'dark'} theme 
 * @returns {string}
 */
const resolveTableTheme = (theme: 'light' | 'dark'):string => {
    switch(theme) {
        case 'dark':
            return 'rgb(4 4 4)';
        case 'light':
            return 'rgb(229, 231, 235)';
        default:
            return 'rgb(229, 231, 235)';
    }
}

/**
 * @function resolveTableHeadTheme
 * @param {'light' | 'dark'} theme 
 * @returns {string}
 */
const resolveTableHeadTheme = (theme: 'light' | 'dark'):string => {
    switch(theme) {
        case 'dark':
            return 'rgb(255 255 255)';
        case 'light':
            return 'rgb(0 0 0)';
        default:
            return 'rgb(0 0 0)';
    }
}

const StyledContainer = styled.div`
    box-shadow: 0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    overflow-x: auto;
    position: relative;
    border-radius: 0.5rem;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTable = styled.table<ITableProps>`
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

const StyledTableHead = styled.thead<ITableProps>`
    color: ${props => props.options?.type ? resolveTableHeadTheme(props.options.type) : resolveTableHeadTheme('light')};
    background-color: ${props => props.options?.type ? resolveTableTheme(props.options.type) : resolveTableTheme('light')};
    font-size: .75rem;
    line-height: 1rem;
    display: table-header-group;
    vertical-align: middle;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTablebody = styled.tbody<ITableProps>`
    background-color: rgb(255 255 255/1);
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
`;

const StyledTableTr = styled.tr<ITableProps>`
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
`;

const StyledTableHeadItem = styled.th<ITableProps>`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    font-family: ${commonConstant.fontFamily};
`;

const StyledTableData = styled.td<ITableProps>`
    color: rgb(4 4 4);
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
        console.log(props.data.tableRowData)
    return (
        <StyledContainer
            className={props.options?.className}
            id={props.options?.id}
        >
            <StyledTable 
                ref={ref}
                role={'table'}
                {...props}
            >
                <StyledTableHead {...props}>
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
                                        {...props}
                                    >
                                        {e.tableTitle}
                                    </StyledTableHeadItem>
                                )
                            })
                        }
                    </tr>
                </StyledTableHead>
                <StyledTablebody {...props}>
                    {
                        props.data.tableRowData && 
                        props.data.tableRowData.length > 0 &&
                        props.data.tableRowData.map((e, i) => {
                            return (
                                <StyledTableTr 
                                    key={i} 
                                    role={'table'}
                                    {...props}
                                >
                                    {
                                        e && Object.values(e).length > 0 && 
                                        Object.values(e).map((item, index) => {
                                            return (
                                                <StyledTableData 
                                                    {...props} 
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
