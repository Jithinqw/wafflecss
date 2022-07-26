# BackDrop

React component for showing a BackDrop inside an entire screen. Users can pass React node as children for showing inside backdrop.

# Usage

```javascript
    import { Backdrop } from 'wafflecss';
    <Backdrop
        data={{
            isVisible: true,
            children: (
                <div>React Children</div>
            )
        }}
    />
```

# Props

## Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| isVisible |  false | boolean |
| children |  true | React.ReactNode |

## Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | void |

## Options

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| bgColor |  true | string |
| color |  true | string |