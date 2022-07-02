import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Announcement from '../components/Announcement/Announcement';
import LegalText from "../components/Basic/Heading/LegalText/LegalText";


export default {
    title: 'Announcement',
    component: Announcement,
    argTypes: {},
} as ComponentMeta<typeof Announcement>

const AnnouncementTemplate: ComponentStory<typeof Announcement> = (args) => {
    const propArgs = {
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
    }
    return (
        <Announcement 
            {...propArgs}
        />
    )
}

export const AnnocementDefault = AnnouncementTemplate.bind({});