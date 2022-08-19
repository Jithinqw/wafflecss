# Color Selector

A react componenent for selecting colors.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/colorselector--color-selector-default).

## Usage

```javascript
    import { ColorSelector } from 'wafflecss';

    <ColorSelector
        data={{
            color: 'teal',
            selected: false
        }}
        options={{
            borderColor: 'pink',
            colorSize: 'lg'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| selected |  false |  `boolean` |
| color |  false |  `string` |
| accessability |  false |  `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false |  `Function` |
| onChange |  false |  `Function` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| disabled |  false |  `boolean` |
| key |  false |  `number` |
| colorSize |  false |  `sm / md  lg` |
| borderColor |  false |  `string` |
