# BackDrop

React component for showing a BackDrop for an entire screen. Users can pass React node as children for showing inside the backdrop.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/backdrop--default-backdrop).

## Usage

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

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| isVisible |  false | boolean |
| children |  true | React.ReactNode |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | void |

### Options

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| bgColor |  true | string |
| color |  true | string |