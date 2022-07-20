import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ImageData } from '../../../../models/defaultStyle';
import { IStackedImageProps } from './StackedImage.props';

const StyledGrid = styled.div`
    display: table;
    border-collapse: collapse;
    border-style: hidden;
    table-layout: fixed;
    width: 100%;
`;

const StyleGridRow = styled.div`
    display: table-row;
`;

const StyledGridCell = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
`;

const StyledDFlex = styled.a`
    display: flex !important;
    align-items: center !important;
`;

const StyledFlexAvatarStack = styled.ul`
    display: flex;
    align-items: center;
    list-style: none !important;
    min-width: 0 !important;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
`;

const StyledflexAvatarTackItem = styled.li`
    min-width: 0;
    max-width: 24px;
    display: list-item;
    text-align: -webkit-match-parent;
`;

const WiggleAnimation = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0eg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
`;

const StyledImage = styled.img<IStackedImageProps>`
    &:hover {
        animation: ${props => props.options?.wiggleAnimation ? css`${WiggleAnimation} 0.82s cubic-bezier(.36,.07,.19,.97) both` : ''};
    };
    border-radius: 50%;
    cursor: pointer;
`;

const StackedImage = forwardRef((props: IStackedImageProps, ref: React.Ref<HTMLDivElement>) => {
    
    return (
        <>
            <StyledGrid ref={ref}>
                <StyleGridRow>
                    <StyledGridCell>
                        <StyledDFlex>
                            <StyledFlexAvatarStack>
                                {
                                    props.data?.imageData && props.data.imageData.map((e: ImageData, i:number) => {
                                        return (
                                            <StyledflexAvatarTackItem key={i}>
                                                <StyledImage 
                                                    src={e?.imageSource}
                                                    height={e?.height}
                                                    width={e?.width}
                                                    alt={e?.alt} 
                                                    key={i}
                                                    onClick={e?.onClick}
                                                />
                                            </StyledflexAvatarTackItem>
                                        );
                                    })
                                }
                            </StyledFlexAvatarStack>
                        </StyledDFlex>
                    </StyledGridCell>
                </StyleGridRow>
            </StyledGrid>
        </>
    )
});

export default StackedImage;
