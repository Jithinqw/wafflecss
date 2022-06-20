import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Heading/Heading'

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {
        data: {
            headingText: "sdfsdf",
        },
        options: {
            size: 'sm'
        }
    },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;
export const Primary = Template.bind({});
