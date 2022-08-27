import React, { memo } from 'react';
import styled from 'styled-components';
import { commonConstant } from '../../../utils/constants';
import { 
    IStackedProgressProps, 
    IProgressData 
} from './StackedProgress.props';

const StyledProgressWrapper = styled.span<IStackedProgressProps>`
    display: flex;
    height: ${props => props.options?.height ? props.options.height : '8px'};
    overflow: hidden;
    background-color: rgba(110,118,129,0.4);
    border-radius: ${props => props.options?.borderRadius ? props.options.borderRadius : '6px'};
    outline: 1px solid transparent;
    font-family: ${commonConstant.fontFamily};
`;

const StyledProgressItem = styled.span`
    outline: 2px solid transparent;
`;

const StackedProgress = (props: IStackedProgressProps) => {
    return (
        <StyledProgressWrapper 
            {...props}
            role={'progressbar'}
            className={props.options?.className}
            id={props.options?.id}
        >
            {
                props.data && props.data.length > 0 &&
                props.data.map((e: IProgressData, i: number) => {
                    return (
                        <StyledProgressItem
                            aria-label={e.bgColor}
                            key={i}
                            tabIndex={0}
                            style={{
                                backgroundColor: e.bgColor,
                                width: e.width.toString() + '%',
                            }}
                        />
                    )
                })
            }
        </StyledProgressWrapper>
    )
}

export default memo(StackedProgress);
