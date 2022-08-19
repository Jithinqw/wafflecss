# Status

React component for showing Status component.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/skeleton--column-skeleton).

## Usage

```javascript
    import { Status } from 'wafflecss';

    <Status
        options={{
            bgColor: 'purple',
            variants: 'rect'
        }}
    />
```

## Props

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| bgColor |  false |  `string` |
| height |  false |  `sm / xs / lg` |
| weight |  false |  `sm / xs / lg` |
| variants |  false |  `rounded / rect` |
| id |  false |  `string` |
| className |  false |  `string` |