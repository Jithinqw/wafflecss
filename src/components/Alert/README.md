# Alert

A React component used to alert users of a particular screen area that needs user action.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/alert--alert-intraction).

## Usage

```javascript
    import { Alert } from 'wafflecss';

    <Alert
        data={{
            displayText: 'This is stacked Alert dark variant'  
        }}
        options={{
            variants: 'dark'
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false |  `string / React.ReactNode` |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onBodyClick |  true | `Function` |

### Options

| Prop Name   |      Is Optional      |  Type |
|----------|:-------------:|------:|
| variants |  true | `error / success / warning / info / dark` |
| testId |    true   |   `string` |
