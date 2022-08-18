# List

React component for showing a `List`.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/list--ordered-list).

## Example

```javascript
    import { List } from 'wafflecss';

    <List
        data={{
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
        }}
        options={{
        listType: 'ordered',
        spacing: '2px'
    }}
/>
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| listData |  false | `Array<ListData>` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| listType |  true | `ordered / 'unordered` |
| spacing |  true | `string` |
| className |  true | `string` |