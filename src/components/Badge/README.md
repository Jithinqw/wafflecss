# Badge

React component for showing badges for users.


## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/badge--default-badge).

## Usage

```javascript
    import { Badge } from 'wafflecss';
    <Badge
        data={{
            displayText: 'I am a Badge and I demand some attention'  
        }}
    />,
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | string |
| background |  true | string |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | void |

### Options

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| variant |  true | `subtle / solid / outline` |
| color |  true | `warn / success / danger` |
| className |  true | string |