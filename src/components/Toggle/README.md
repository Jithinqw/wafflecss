# Toggle

React component for rendering Toggle.

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
| parentLabel |  false |  `boolean` |
| children |  false |  `Object`|

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| patentStyle |  false |  `Object` |
