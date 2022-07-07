import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '../components/Basic/List/List';

export default {
    title: 'List',
    component: List,
    argTypes: {},
} as ComponentMeta<typeof List>

const ListTemplate: ComponentStory<typeof List> = (args) => {
    const propArgs = {
        data: {
            listData: [
                {
                    listItem: 'മലയാള ഭാഷ സംസ്കൃതത്തിൽ നിന്ന് ഉദ്ഭവിച്ചതാണെന്നും അതല്ല സംസ്കൃതവും തമിഴും കൂടിക്കലർന്ന ഒരു മിശ്രഭാഷയാണെന്നും ആദ്യകാലങ്ങളിൽ വിശ്വസിച്ചിരുന്നു'
                },
                {
                    listItem: 'എന്നാൽ ഗവേഷണങ്ങൾ ഇതിനെയെല്ലാം നിരാകരിക്കുകയും "മലയാളം മൂല ദ്രാവിഡ ഭാഷയിൽ നിന്ന് തമിഴിനൊപ്പം ഉണ്ടായി" എന്നുള്ള കൂടുതൽ യുക്തമായ സിദ്ധാന്തം അവതരിപ്പിക്കപ്പെട്ടു.'
                },
                {
                    listItem: 'മലയാള ഭാഷയെക്കുറിച്ച് ആദ്യമായി പഠനം നടത്തുന്നത് സ്കോട്ട്ലന്ഡുകാരനായ ഭാഷ ചരിത്രകാരൻ റോബർട്ട് കാൾഡ്വെൽ ആണ്.'
                },
                {
                    listItem: 'അദ്ദേഹം മലയാളം പ്രാചീന തമിഴിന്റെ ശാഖയാണ് എന്നാണ് അഭിപ്രായപ്പെട്ടത്. പുരുഷഭേദ നിരാസം, സംസ്കൃത ബാഹുല്യം എന്നിവ നിമിത്തം മലയാളം, തമിഴിൽ നിന്ന് അകന്നു നിൽക്കുന്നു എന്നാണ് അദ്ദേഹം കരുതിയത്.'
                }
            ]
        },
        options: {
            listType: 'unordered',
            spacing: '2px'
        }
    }
    return (
        <List 
            {...propArgs} 
        />
    )
};

export const UnorderedList = ListTemplate.bind({});

const OrderedListTemplate: ComponentStory<typeof List> = (args) => {
    const propArgs = {
        data: {
            listData: [
                {
                    listItem: 'The red panda was first formally described in 1825. The two currently recognised subspecies, the Himalayan and the Chinese red panda, genetically diverged about 250,000 years ago.'
                },
                {
                    listItem: 'The red pandas place on the evolutionary tree has been debated, but modern genetic evidence places it in close affinity with raccoons, weasels, and skunks.'
                },
                {
                    listItem: 'It is not closely related to the giant panda, which is a bear, though both possess elongated wrist bones or "false thumbs" used for grasping bamboo.'
                },
                {
                    listItem: 'The evolutionary lineage of the red panda (Ailuridae) stretches back around 25 to 18 million years ago, as indicated by extinct fossil relatives found in Eurasia and North America.'
                }
            ]
        },
        options: {
            listType: 'ordered',
            spacing: '12px'
        }
    }
    return (
        <List 
            {...propArgs} 
        />
    )
};

export const OrderedList = OrderedListTemplate.bind({});