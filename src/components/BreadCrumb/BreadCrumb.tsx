import React, { forwardRef } from "react";
import { IBreadCrumbProps } from "./BreadCrumb.props";
import Stack from "../Layout/Stack/Stack";
import Link from "../Basic/Link/Link";
import styled from "styled-components";

const StyledOrderedList = styled.ol`
    max-height: 9999px;
    padding-left: 25px;
    direction: ltr;
    list-style: none;
    white-space:nowrap;
`;

const StyledListItem = styled.li`
    display: inline-block;
    margin: 0 10px;
    &:after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4cHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDggMTgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xLjI5LDAuOThMNy41LDlsLTYuMjEsOC4wMWwtMC42OC0wLjU0TDYuNDIsOWwtNS44LTcuNDlMMS4yOSwwLjk4eiIgZmlsbD0iIzQ0NCIgLz48L3N2Zz4=);
    }
`;

const BreadCrumb = forwardRef((props: IBreadCrumbProps, ref: React.Ref<HTMLOListElement>) => {
    return (
        <Stack>
            <StyledOrderedList ref={ref}>
                {props.data && props.data.map((e, i) => {
                    return (
                        <StyledListItem>
                            <Link 
                                data={{
                                    displayText: e.displayText
                                }}
                                events={{
                                    onClick: props.events?.onClick
                                }}
                            />
                        </StyledListItem>
                    )
                })}
            </StyledOrderedList>
        </Stack>
    )
});

export default BreadCrumb;
