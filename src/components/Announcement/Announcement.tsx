import React from "react";
import styled from "styled-components";
import LegalText from "../Basic/Heading/LegalText/LegalText";
import { IAnnouncementProps } from "./Announcement.props";

const StyledAnnouncement = styled.div`
    background-color: var(--ds-background-boldNeutral-resting, #42526E);
    color: var(--ds-text-onBold, #FFFFFF);
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
    fill: var(--ds-background-boldNeutral-resting, #42526E);
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
    float: right;
    position: relative;
    z-index: 1;
    background-color: var(--ds-background-neutral-bold,#42526E);
    color: var(--ds-icon-inverse,#FFFFFF);
`;

const Announcement = (props: IAnnouncementProps) => {
    return (
        <StyledAnnouncement>
            <StyledWrapper>
                <StyledSpanAlert>
                    <StyledTextNodeWrapper>
                        {props.data?.displayNode}
                    </StyledTextNodeWrapper>
                </StyledSpanAlert>
                <StyledDismissContainer 
                    onClick={props.events?.onDismiss}>
                    <LegalText 
                        data={{
                            displayText: 'x'
                        }}
                        options={{
                            legalTextSize: 'md',
                            style: {
                                color: 'white'
                            }
                        }}
                    />
                </StyledDismissContainer>
            </StyledWrapper>
            
        </StyledAnnouncement>
    )
}

export default Announcement;
