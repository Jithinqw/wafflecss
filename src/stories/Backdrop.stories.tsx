import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BackDrop from '../components/Backdrop/Backdrop';
import Heading from '../components/Basic/Heading/Heading';

export default {
    title: 'BackDrop',
    component: BackDrop,
    argTypes: {
        data: {
            isVisible: { control: 'boolean' },
            children: { control: { type: 'object' } }
        }
    },
    args: {
        data: {
            isVisible: true,
            children: (
                <Heading 
                    data={{
                        headingText: 'Free express shipping. \
                        No activation fee online. No credit check.'
                    }}
                />
            ),
        }
    },
} as ComponentMeta<typeof BackDrop>

const Template: ComponentStory<typeof BackDrop> = (args) => {
    return <BackDrop {...args} />
};

export const DefaultBackdrop = Template.bind({});