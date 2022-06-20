import React from "react";
import styled from "styled-components";

const StyledBannerDiv = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding-top: var(--chakra-space-2);
    padding-bottom: var(--chakra-space-2);
    -webkit-padding-start: var(--chakra-space-3);
    padding-inline-start: var(--chakra-space-3);
    -webkit-padding-end: var(--chakra-space-3);
    padding-inline-end: var(--chakra-space-3);
    background-image: linear-gradient(to right, var(--chakra-colors-cyan-700), var(--chakra-colors-purple-500));
    color: var(--chakra-colors-white);
    text-align: center;
`;

const StyledDivEle = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: var(--chakra-fontSizes-sm);
`;

const StyledBtn = styled.a`
    webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-start: var(--chakra-space-6);
    margin-inline-start: var(--chakra-space-6);
    background: var(--chakra-colors-blackAlpha-300);
    color: var(--chakra-colors-whiteAlpha-900);
    font-weight: var(--chakra-fontWeights-semibold);
    -webkit-padding-start: var(--chakra-space-3);
    padding-inline-start: var(--chakra-space-3);
    -webkit-padding-end: var(--chakra-space-3);
    padding-inline-end: var(--chakra-space-3);
    padding-top: var(--chakra-space-1);
    padding-bottom: var(--chakra-space-1);
    border-radius: var(--chakra-radii-base);
    }
`;
const Banner = () => {
    return (
        <div></div>
    )
}