import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../components/Basic/List/List'

export default {
    title: 'List',
    component: List,
    args: {
        data: {
            listData: [
                {
                    listItem:
                        'മലയാള ഭാഷ സംസ്കൃതത്തിൽ നിന്ന് ഉദ്ഭവിച്ചതാണെന്നും അതല്ല സംസ്കൃതവും തമിഴും കൂടിക്കലർന്ന ഒരു മിശ്രഭാഷയാണെന്നും ആദ്യകാലങ്ങളിൽ വിശ്വസിച്ചിരുന്നു',
                },
                {
                    listItem:
                        'എന്നാൽ ഗവേഷണങ്ങൾ ഇതിനെയെല്ലാം നിരാകരിക്കുകയും "മലയാളം മൂല ദ്രാവിഡ ഭാഷയിൽ നിന്ന് തമിഴിനൊപ്പം ഉണ്ടായി" എന്നുള്ള കൂടുതൽ യുക്തമായ സിദ്ധാന്തം അവതരിപ്പിക്കപ്പെട്ടു.',
                },
                {
                    listItem:
                        'മലയാള ഭാഷയെക്കുറിച്ച് ആദ്യമായി പഠനം നടത്തുന്നത് സ്കോട്ട്ലന്ഡുകാരനായ ഭാഷ ചരിത്രകാരൻ റോബർട്ട് കാൾഡ്വെൽ ആണ്.',
                },
                {
                    listItem:
                        'അദ്ദേഹം മലയാളം പ്രാചീന തമിഴിന്റെ ശാഖയാണ് എന്നാണ് അഭിപ്രായപ്പെട്ടത്. പുരുഷഭേദ നിരാസം, സംസ്കൃത ബാഹുല്യം എന്നിവ നിമിത്തം മലയാളം, തമിഴിൽ നിന്ന് അകന്നു നിൽക്കുന്നു എന്നാണ് അദ്ദേഹം കരുതിയത്.',
                },
            ],
        },
    },
} as ComponentMeta<typeof List>

const ListTemplate: ComponentStory<typeof List> = (args) => {
    return (
        <List
            {...args}
            options={{
                listType: 'unordered',
                spacing: '2px',
            }}
        />
    )
}

const OrderedListTemplate: ComponentStory<typeof List> = (args) => {
    return (
        <List
            {...args}
            options={{
                listType: 'ordered',
                spacing: '2px',
            }}
        />
    )
}

export const OrderedList = OrderedListTemplate.bind({})
export const UnorderedList = ListTemplate.bind({})
