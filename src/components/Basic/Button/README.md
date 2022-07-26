# Button 

A React component for displaying button.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/button--default-button).

# Usage

```javascript
    import { Button } from 'wafflecss';
    <Button
        data={{
            displayText: 'This is a button'
        }}
    />
```

# Props

## Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | string |
| id |  true | string |
| isDisabled |  true | string |
| radius |  true | string |
| width |  true | string |

## Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | void |
| onFocus |  true | void |

## Options

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| size |  true | `xs / sm / md / lg` |
| buttonType |  true | `button / submit / reset` |
| variants |  true | `default / danger / success / primary` |
| style |  true | void |