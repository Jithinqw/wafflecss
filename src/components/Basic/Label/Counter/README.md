# Counter

Counter is a React component for showing the various Counter.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/counter--counter-default).

## Example

```javascript
    import { Counter } from 'wafflecss';

    <Counter
        data={{
            displayText: '232'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string / ReactNode` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  true | `Function` |

### Options 

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| counterType |  true | `primary / dark` |
| className |  true | `string` |
| id |  true | `string` |