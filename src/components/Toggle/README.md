# Toggle

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/toggle--toggleprimary).

## Usage

```javascript
    import { Toggle } from 'wafflecss';

    <Toggle
        data={{
            children: {
            __html: '<div>You have the right to remain silent</div>'
            },
            parentLabel: 'Show your Rights'
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
