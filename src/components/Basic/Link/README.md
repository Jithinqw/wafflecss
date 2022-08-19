# Link

React component for displaying link.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/link--primary).

## Example

```javascript
    import { Link } from 'wafflecss';

    <Link
        data={{
            displayText: 'Shop Unlimited Plans'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string / React.ReactNode` |
| id |  true | `string` |
| isDisabled |  true | `boolean` |

### Events 

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  true | `Function` |

### Options 

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| underline |  true | `string` |
| hoverUnderline |  true | `string` |
| styleOptions |  true | `string` |
| size |  true | `sm / md / lg` |
| className |  true | `Function` |
