import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from '../components/Layout/Container/Container'
import LegalText from '../components/Basic/Heading/LegalText/LegalText'

export default {
    title: 'Container',
    component: Container,
    args: {
        data: {
            children: (
                <LegalText
                    data={{
                        displayText:
                            'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service',
                    }}
                    options={{
                        legalTextSize: 'lg',
                    }}
                />
            ),
        },
    },
} as ComponentMeta<typeof Container>

const ContainerTemplate: ComponentStory<typeof Container> = (args) => {
    return <Container {...args} />
}
export const ContainerDefault = ContainerTemplate.bind({})
