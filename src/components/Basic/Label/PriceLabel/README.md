# Price Label

React component for displaying Price with adjustments made with precision.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/pricelabel--default-price-label).

## Example

```javascript
    import { PriceLabel } from 'wafflecss';

    <PriceLabel
        data={{
            currencySymbol: '₹',
            precision: 1,
            price: 234.3434,
            recurringLabel: '/yr.'
        }}
        options={{
            isStrikethrough: false
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| currencySymbol |  false | `string` |
| price |  false | `number` |
| precision |  false | `number` |
| recurringLabel |  false | `string` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| isStrikethrough |  true | `string` |
| color |  true | `number` |
| fontFamily |  true | `number` |
| fontSize |  true | `string` |
| className |  true | `string` |
| id |  true | `string` |