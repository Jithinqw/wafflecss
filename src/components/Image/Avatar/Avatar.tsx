import styled from "styled-components";
import { IAvatarProps } from "./Avatar.props";

const StyledRoundedAvatarImage = styled.img<IAvatarProps>`
    border-radius: 9999px;
    width: ${props => props.data.weight ? props.data.weight : '2.5rem'}
    height: ${props => props.data.height ? props.data.height : '2.5rem'};
    max-width: 100%;
    display: block;
    vertical-align: middle;
`;

const StyledRectAvatarImage = styled.img<IAvatarProps>`
    border-radius: 0.25rem;
    width: ${props => props.data.weight ? props.data.weight : '2.5rem'}
    height: ${props => props.data.height ? props.data.height : '2.5rem'};
    max-width: 100%;
    display: block;
    vertical-align: middle;
    src: ${props => props.data.imageSrc ? props.data.imageSrc : ''},
`;

const StyledBorderedAvatarImage = styled.img<IAvatarProps>`
    border-radius: 9999px;
    width: ${props => props.data.weight ? props.data.weight : '2.5rem'}
    height: ${props => props.data.height ? props.data.height : '2.5rem'};
    max-width: 100%;
    display: block;
    vertical-align: middle;
`;

const Avatar = (props: IAvatarProps) => {

    const resolveAvatar = () => {
        switch(props.options?.avatarType) {
            case 'rounded':
                return StyledRoundedAvatarImage;
            case 'rect':
                return StyledRectAvatarImage;
            case 'bordered':
                return StyledBorderedAvatarImage;
            default: 
                return StyledRectAvatarImage;
        }
    }

    return (
        resolveAvatar()
    )
}

export default Avatar;
