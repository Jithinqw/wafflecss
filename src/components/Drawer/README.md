# Drawer

A React component for displaying a drawer sidebar.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/drawer--default).

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

| Prop Name   |Is Optional    |  Type | Todo |
|----------|:-------------:|------:| ------:|
| onDismiss |  false | `Function` | `true` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| bgColor |  false | `string` |
| width |  false | `string` |
| borderRadius |  false | `string` |
| position |  false | `left / right` |