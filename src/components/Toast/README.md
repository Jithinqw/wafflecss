# Toast

React component for rendering Toast.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/toast--toastprimary).

## Usage

```javascript
    import { Toggle, LegalText } from 'wafflecss';

    <Toast
        data={{
            displayText: 'Available for qualifying applicants in the United States.',
            showToast: true,
            toastHeadNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service'
                    }} 
                    options={{
                        legalTextSize: 'md'
                    }}
                />
            ),
            toastHeadTextNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service'
                    }} 
                    options={{
                        legalTextSize: 'sm'
                    }}
                />
            )
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| showToast |  false |  `boolean` |
| toastHeadNode |  false |  `React.ReactNode | string`|
| toastHeadTextNode |  false |  `React.ReactNode | string` |
| displayText |  false |  `string | React.ReactNode` |
| display |  false |  `number` |
| className |  false |  `string` |
id | false | `string`|

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onDismiss |  false |  `Function` |
