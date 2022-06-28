import React from "react";
import styled from "styled-components";
import { colorPalette, commonConstant } from "../../../models/constants";
import { ICenterProps } from "./Center.props";

const StyledCenter = styled.div<ICenterProps>`
    display: ${commonConstant.flexDisplay};
    -webkit-box-align: ${commonConstant.alignItemCenter};
    align-items: ${commonConstant.alignItemCenter};
    -webkit-box-pack: center;
    justify-content: center;
    background: ${props => props.data?.backgroundColor ? props.data?.backgroundColor : colorPalette.defaultWhite};
    height: ${props => props.data?.height ? props.data?.height : '80px'};
    width: ${props => props.data?.width ? props.data?.width : '80px'};
    color: ${props => props.data?.color ? props.data?.color : colorPalette.defaultWhite};
`;

const Center = (props: ICenterProps) => {
    return (
        <StyledCenter {...props} onClick={props.events?.onClick}>
            {props.data.children}
        </StyledCenter>
    );
}

export default Center;
