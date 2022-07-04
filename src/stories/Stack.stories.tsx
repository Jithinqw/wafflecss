import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '../components/Layout/Stack/Stack';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';

export default {
    title: 'Stack',
    component: Stack,
    args: {
        children: (
            <div>
                <LegalText data={{
                        displayText: 'Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location.'
                    }}
                />
                <LegalText data={{
                    displayText: 'And say Hey Apple.'
                }}
                />
            </div>
        )
    }
} as ComponentMeta<typeof Stack>

const StackTemplate: ComponentStory<typeof Stack> = (args) => {
    return <Stack {...args}/>
}
export const DefaultStack = StackTemplate.bind({});