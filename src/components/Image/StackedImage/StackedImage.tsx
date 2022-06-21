import React from 'react';
import styled from 'styled-components';
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

const StackedImage = (props: IStackedImageProps) => {
    return (
        <>
            <StyledGrid>
                <StyleGridRow>
                    <StyledGridCell>
                        <StyledDFlex>
                            <StyledFlexAvatarStack>
                                {
                                    props.data?.imageData && props.data.imageData && props.data.imageData.map((e, i:number) => {
                                        return (
                                            <StyledflexAvatarTackItem key={i}>
                                                <img 
                                                    src={e.imageSource}
                                                    height={e.height}
                                                    width={e.width}
                                                    alt={e.alt} key={i}
                                                    onClick={e?.onClick}
                                                />
                                            </StyledflexAvatarTackItem>
                                        )
                                    })
                                }
                            </StyledFlexAvatarStack>
                        </StyledDFlex>
                    </StyledGridCell>
                </StyleGridRow>
            </StyledGrid>
        </>
    )
}

export default StackedImage;
