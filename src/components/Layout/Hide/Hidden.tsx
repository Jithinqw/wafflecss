import React, { forwardRef } from "react";
import styled from "styled-components";
import { IHiddenProps } from "./Hidden.props";

const resolveHiddenStyle = (hiddenType: 'sr' | 'none-sr' | 'hidden') => {
    switch(hiddenType) {
        case 'hidden':
            return 'display: hidden';
        case 'sr':
            return `clip: rect(0 0 0 0); 
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap; 
            width: 1px;`;
        default:
            return 'display: hidden';
    }
}

const StyledHidden = styled.div<IHiddenProps>`
    ${props => props.options?.type ? resolveHiddenStyle(props.options?.type) : resolveHiddenStyle('hidden')};
`;

const Hidden = forwardRef((props: IHiddenProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <StyledHidden 
            ref={ref} 
            {...props}
        >
            {props.data.children}
        </StyledHidden>
    )
});

export default Hidden;
