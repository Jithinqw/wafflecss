import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Announcement from '../components/Announcement/Announcement';
import LegalText from "../components/Basic/Heading/LegalText/LegalText";


export default {
    title: 'Announcement',
    component: Announcement,
    args: {
        data: {
            displayNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service.',
                    }}
                    options={{
                        legalTextSize: 'md',
                        style: {
                            color: 'white'
                        }
                    }}
                />
            ),
        },
        events: {
            onDismiss: Function.prototype
        }
    },
} as ComponentMeta<typeof Announcement>

const AnnouncementTemplate: ComponentStory<typeof Announcement> = (args) => {
    return (
        <Announcement 
            {...args}
        />
    )
}

const AnnouncementAction: ComponentStory<typeof Announcement> = (args) => {
    return (
        <Announcement
            {...args}
            events={{
                onDismiss: action("User pressed dismiss button on Annoncement component")
            }}
        />
    )
}

export const AnnocementDefault = AnnouncementTemplate.bind({});
export const AnnocementActionTest = AnnouncementAction.bind({});