import React from 'react';
import { 
    ComponentStory, 
    ComponentMeta 
} from '@storybook/react';
import Divider from '../components/Divider/Divider';

export default {
    title: 'Divider',
    component: Divider,
    args: {
    },
} as ComponentMeta<typeof Divider>

const DividerDefault: ComponentStory<typeof Divider> = (args) => {
    return (
        <Divider 
            {...args} 
        />
    )
}

export const DotTemplate = DividerDefault.bind({});