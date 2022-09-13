import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/Basic/Button/Button'
import Drawer from '../components/Drawer/Drawer'

export default {
    title: 'Drawer',
    component: Drawer,
    args: {},
} as ComponentMeta<typeof Drawer>

const DrawerTemplate: ComponentStory<typeof Drawer> = args => {
    const [showDrawer, setDrawerState] = useState<boolean>(false);

    const openDrawer = () => {
        setDrawerState(!showDrawer);
    }

    return (
        <>
            <Button 
                data={{
                    displayText: 'Click here to open up drawer'
                }}
                events={{
                    onClick:openDrawer
                }}
            />
            <Drawer 
                data={{
                    isVisible: showDrawer,
                    children: (
                        <>
                            <div>child Div</div>
                        </>
                    )
                }}
            />
        </>
    )
}

export const Default = DrawerTemplate.bind({})
