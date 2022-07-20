import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../components/Modal/Modal'
import LegalText from '../components/Basic/Heading/LegalText/LegalText'
import Button from '../components/Basic/Button/Button'

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>

const ModalTemplate: ComponentStory<typeof Modal> = (args) => {
    const propArgs = {
        data: {
            modalHeadingNode: (
                <LegalText
                    data={{
                        displayText:
                            'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service',
                    }}
                    options={{
                        legalTextSize: 'md',
                    }}
                />
            ),
            modalBodyNode: (
                <LegalText
                    data={{
                        displayText:
                            'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service',
                    }}
                    options={{
                        legalTextSize: 'sm',
                    }}
                />
            ),
            modalFooterNode: (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Button
                        data={{
                            displayText: 'Leave this Page',
                        }}
                        options={{
                            variants: 'default',
                            size: 'md',
                        }}
                    ></Button>
                    <div style={{ marginRight: '4px' }}></div>
                    <Button
                        data={{
                            displayText: 'Stay on this Page',
                        }}
                        options={{
                            variants: 'default',
                            size: 'md',
                        }}
                    ></Button>
                </div>
            ),
        },
        options: {
            isVisible: true,
        },
    }
    return <Modal {...propArgs} />
}
export const Default = ModalTemplate.bind({})
