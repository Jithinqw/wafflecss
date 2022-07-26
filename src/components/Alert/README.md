# Alert

A React component used to alert users of a particular screen area that needs user action

# Usage

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

# Props

## Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | string |

## Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onBodyClick |  true | void |

## Options

| Prop Name   |      Is Optional      |  Type |
|----------|:-------------:|------:|
| variants |  true | error/success/warning/info/dark |
| testId |    true   |   string |
