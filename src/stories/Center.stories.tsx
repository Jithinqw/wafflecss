import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Center from '../components/Layout/Center/Center';
import Heading from "../components/Basic/Heading/Heading";

export default {
    title: 'Center',
    component: Center,
    argTypes: {},
} as ComponentMeta<typeof Center>

const CenterDefault: ComponentStory<typeof Center> = (args) => {
    const propArgs = {
        data: {
            children: <Heading data={{headingText: 'Demo'}}/>,
            width: '300px',
            height: '300px',
            backgroundColor: 'rgb(153, 102, 255)'
        }
    }
    return (
        <Center 
            {...propArgs} 
        />
    )
};
export const CenterAlign = CenterDefault.bind({});