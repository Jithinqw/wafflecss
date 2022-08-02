import React from "react";
import styled from "styled-components";
import { ICardProps } from "./Card.props";

const StyledCardWrapper = styled.div`
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    text-decoration: none;
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: #fff;
    color: #666;
    border-radius: 8px;
    box-shadow: 1px 3px 19px -6px #d5d5d5;
    font-family: 'Open Sans';
`;

const StyledCardTitleSection = styled.div`
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    text-decoration: none;
    padding: 8px;
`;

const StyledCardBody = styled.div`
    border-top: 1px solid #efefef;
    padding: 24px;
`;

const StyledCardFooter = styled.div`

`;

const Card = (props: ICardProps) => {
    return (
        <StyledCardWrapper>
            <StyledCardTitleSection>
                {props.data.cardTitleNode}
            </StyledCardTitleSection>
            <StyledCardBody>
                {props.data.cardBodyNode}
            </StyledCardBody>
            <StyledCardFooter>
                {props.data.cardTitleNode}
            </StyledCardFooter>
        </StyledCardWrapper>
    )
}

export default Card;
