# Drawer

A React component for displaying a drawer sidebar.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/divider--dot-template).

## Example

```javascript
    import { Drawer } from 'wafflecss';

    <Drawer />

```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| isVisible |  false | `boolean` |
| children |  false | `React.ReactNode` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onDismiss |  false | `Function` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| bgColor |  false | `string` |
| width |  false | `string` |
| borderRadius |  false | `string` |
| position |  false | `left / right` |