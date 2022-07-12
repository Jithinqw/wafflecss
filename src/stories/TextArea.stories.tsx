import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from '../components/Basic/Input/TextArea/TextArea';

export default {
    title: 'TextArea',
    component: TextArea,
    argTypes: {},
    args: {
        data: {
            placeholder: 'TextInput Placeholder',
            value: ''
        },
        options: {
            size: 'lg'
        }
    },
} as ComponentMeta<typeof TextArea>

const TextAreaInputTemplate: ComponentStory<typeof TextArea> = (args) => {
    return <TextArea {...args} />
};

export const DefaultTextAreaInput = TextAreaInputTemplate.bind({});
