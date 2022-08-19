# Progress

A React component used Progress bar.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/progress--default-progress-bar).

## Usage

```javascript
    import { Progress } from 'wafflecss';

    <Progress
        data={{
            animateStripe: true,
            color: 'red',
            enableStripe: true,
            height: '15px',
            width: '10%'
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| width |  false |  `string` |
| color |  false |  `string` |
| height |  false |  `string` |
| children |  false |  `string` |
| animateStripe |  false |  `string` |

### Events
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false |  `Function` |
