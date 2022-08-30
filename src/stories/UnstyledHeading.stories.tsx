import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnstyledHeading from '../components/UnStyled/Heading';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UnStyled Heading',
    component: UnstyledHeading,
    args:{
        data: {
            headingText: 'Supreme allied commander',
        },
        headingLevel: 0
    }
} as ComponentMeta<typeof UnstyledHeading>

const UnstyledHeadingTemplate: ComponentStory<typeof UnstyledHeading> = (args) => {
    return (
        <UnstyledHeading
            {...args}
            events={{
                onClick: action('User click'),
            }}
        />
    )
}

export const DefaultUnstyledHeading = UnstyledHeadingTemplate.bind({});
