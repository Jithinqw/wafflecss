import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BackDrop from '../components/Backdrop/Backdrop'
import Heading from '../components/Basic/Heading/Heading'
import { action } from '@storybook/addon-actions'

export default {
    title: 'BackDrop',
    component: BackDrop,
    argTypes: {
        data: {
            isVisible: { control: 'boolean' },
            children: { control: { type: 'object' } },
        },
        events: {
            onClick: { control: { type: 'object' } },
        },
    },
    args: {
        data: {
            isVisible: true,
            children: (
                <Heading
                    data={{
                        headingText:
                            'Free express shipping. \
                        No activation fee online. No credit check.',
                    }}
                />
            ),
        },
    },
} as ComponentMeta<typeof BackDrop>

const Template: ComponentStory<typeof BackDrop> = (args) => {
    return <BackDrop {...args} />
}

const BackDropTest: ComponentStory<typeof BackDrop> = (args) => {
    return (
        <BackDrop
            {...args}
            events={{
                onClick: action('User Clicked on Backdrop'),
            }}
        />
    )
}

export const DefaultBackdrop = Template.bind({})
export const EventTest = BackDropTest.bind({})
