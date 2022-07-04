import React from "react";
import { ComponentStory, 
    ComponentMeta 
} from '@storybook/react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

export default {
    title: 'BreadCrumb',
    component: BreadCrumb,
    argTypes: {},
} as ComponentMeta<typeof BreadCrumb>

const BadgeTemplate: ComponentStory<typeof BreadCrumb> = (args) => {
    const propArgs = {
        data: [
            {displayText: "dfsdfsdf"},
            {displayText: "dfsdfsdf"},
            {displayText: "dfsdfsdf"},
            {displayText: "dfsdfsdf"}
        ],
        options: {
            color: 'danger',
        }
    }
    return (
        <BreadCrumb {...propArgs}/>
    )
}

export const DefaultBadge = BadgeTemplate.bind({});