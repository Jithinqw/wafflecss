import React, { forwardRef } from "react";
import styled from "styled-components";
import { commonConstant } from "../../../utils/constants";
import { IAnnouncementProps } from "./Announcement.props";

const StyledAnnouncement = styled.div`
    background-color: #42526E;
    color: #FFFFFF;
    overflow: hidden;
    max-height: 88px;
    overflow: scroll;
    max-height: 32px !important;
    padding: 2px !important;
`;

const StyledWrapper = styled.div`
    display: flex;
    margin: auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: currentcolor;
    font-weight: 500;
    text-align: center;
    transition: color 0.25s ease-in-out 0s;
    max-width: 876px;
`;

const StyledSpanAlert = styled.span`
    fill: #42526E;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 0 0 auto;
    flex-direction: column;
    max-height: 32px !important;
    padding: 2px !important;
`;

const StyledTextNodeWrapper = styled.div`
    padding: 4px;
    flex: 0 1 auto;
    justify-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 32px !important;
    padding: 2px !important;
`;

const StyledDismissContainer = styled.div`
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-right: 5px;
    margin-top: 5px;
    font-family: ${commonConstant.fontFamily};
    float: right;
    position: relative;
    z-index: 1;
    background-color: #42526E;
    color: #FFFFFF;
`;

const Announcement = forwardRef((
        props: IAnnouncementProps, 
        ref: React.Ref<HTMLDivElement>
    ) => {
    return (
        <StyledAnnouncement 
            ref={ref}
            className={props.options?.className}
            id={props.options?.id}
        >
            <StyledWrapper>
                <StyledSpanAlert>
                    <StyledTextNodeWrapper>
                        {props.data?.displayNode}
                    </StyledTextNodeWrapper>
                </StyledSpanAlert>
                <StyledDismissContainer 
                    onClick={props.events?.onDismiss}
                >
                    {props.data.closeCTA ? props.data.closeCTA : 'x'}
                </StyledDismissContainer>
            </StyledWrapper>
        </StyledAnnouncement>
    )
});

export default Announcement;
