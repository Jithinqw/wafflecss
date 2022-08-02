import React from "react";
import styled from "styled-components";
import { commonConstant } from "../../../utils/constants";
import { ITopBannerProps } from "./TopBanner.props";


const resolveBannerColor = (bannerType: 'danger' | 'info' | 'success' | 'warning') => {
        switch(bannerType) {
            case 'danger':
                return '#d42551';
            case 'success':
                return '#03b080';
            case 'info':
                return '#1459a3';
            case 'warning':
                return '#e59c01';
            default:
                return '#d42551';
        }
}

const StyledWrapper = styled.div`
    position: relative;
    height: 2rem;
    box-sizing: inherit;
`;

const StyledContainer = styled.div<ITopBannerProps>`
    position: absolute;
    border-top: 0.25rem solid ${props => props.options?.bannerType ? resolveBannerColor(props.options.bannerType) : resolveBannerColor('success')};
    top: 0;
    width: 100%;
    z-index: 1400;
    position: fixed;
    font-size: 0.75rem;
    text-align: center;
    pointer-events: none;
`;

const StyledAnnouncement = styled.div<ITopBannerProps>`
    background-color: ${props => props.options?.bannerType ? resolveBannerColor(props.options.bannerType) : resolveBannerColor('success')};
    color: #fff;
    cursor: pointer;
    display: inline-block;
    padding: 0.1875rem 0.5rem;
    font-weight: 600;
    line-height: 1.5em;
    user-select: none;
    border-radius: 0 0 0.3rem 0.3rem;
    letter-spacing: .01em;
    pointer-events: initial;
    font-family: ${commonConstant.fontFamily};
`;

const TopBanner = (props: ITopBannerProps) => {

    return (
        <StyledWrapper>
            <StyledContainer {...props}>
                <StyledAnnouncement {...props}>
                    {props.data.displayText}
                </StyledAnnouncement>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default TopBanner;
