import React from 'react';
import { 
    ComponentStory, 
    ComponentMeta 
} from '@storybook/react';
import Card from '../components/Card/Card';
import Heading from '../components/Basic/Heading/Heading';

export default {
    title: 'Card',
    component: Card,
    args: {
        data: {
            cardTitleNode: <Heading data={{headingText: 'Heading'}}/>,
            cardBodyNode: <Heading data={{headingText: 'Heading body'}}/>,
            cardFooterNode: <Heading data={{headingText: 'Footer'}}/>
        }
    },
} as ComponentMeta<typeof Card>

const CardDefault: ComponentStory<typeof Card> = (args) => {
    return <Card {...args} />
}

export const CardTemplate = CardDefault.bind({});