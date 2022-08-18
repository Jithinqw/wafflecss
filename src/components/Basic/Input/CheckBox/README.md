# Checkbox

React component for rendering Checkbox.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/checkbox--checkbox-default).

## Usage

```javascript
    import { Checkbox } from 'wafflecss';

    <Checkbox
        data={{
            displayText: 'Demo',
            value: 'Demo'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string | React.ReactNode` |
| value |  false | `string` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| variant |  true | `sm / md / lg` |
| borderColor |  true | `string` |
| bgColor |  true | `string` |
| className |  true | `string` |
| id |  true | `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onCheckboxChange |  true | `Function` |