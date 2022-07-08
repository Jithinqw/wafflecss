import React, { forwardRef } from "react";
import styled from "styled-components";
import { colorPalette, commonConstant, modalConstants } from "../../models/constants";
import { IModalProps } from "./Modal.props";

const StyledDivContainer = styled.div`
    display: ${commonConstant.flexDisplay};
    flex-direction: ${commonConstant.flexColDirection};
    height: calc(100% - 119px);
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 120px);
    top: 60px;
    width: ${modalConstants.width};
    z-index: ${modalConstants.ZIndex};
    pointer-events: ${commonConstant.cursorNone};
    position: absolute;
    transition: ${modalConstants.transition};
`;

const StyledDialog = styled.div`
    background-color: ${colorPalette.bgColor};
    border-radius: 3px;
    box-shadow: ${modalConstants.boxShadow};
    color: ${colorPalette.colorDefault};
    display: ${commonConstant.flexDisplay};
    flex-direction: ${commonConstant.flexColDirection};
    height: auto;
    max-height: 100%;
    outline: 0px;
    pointer-events: auto;
`;

const StyledChildDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0px;
    max-height: 100%;
`;

const StyledDialogHeader = styled.header`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    transition: box-shadow 200ms ease 0s;
    z-index: 1;
    padding: 24px 24px 22px;
    box-shadow: none;
`;

const StyledDialogBody = styled.div`
    flex: 1 1 auto;
    overflow: hidden auto;
    padding: 2px 24px;
`;

const StyledFooter = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    transition: box-shadow 200ms ease 0s;
    z-index: 1;
    padding: 22px 24px 24px;
    box-shadow: none;
`;

const Modal = forwardRef((props: IModalProps, ref: React.Ref<HTMLDivElement>) => {
    return (
            props && props.options.isVisible ? (
                <StyledDivContainer ref={ref}>
                    <StyledDialog>
                        <StyledChildDiv>
                            <StyledDialogHeader>
                                {props.data?.modalHeadingNode}
                            </StyledDialogHeader>
                            <StyledDialogBody>
                                {props.data?.modalBodyNode}
                            </StyledDialogBody>
                            <StyledFooter>
                                {props.data?.modalFooterNode}
                            </StyledFooter>
                        </StyledChildDiv>
                    </StyledDialog>
                </StyledDivContainer>
            ) : null 
    )
});

export default Modal;
