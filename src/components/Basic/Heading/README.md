# Heading

React component for displaying heading.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/heading--small).

# Usage

```javascript
    import { Heading } from 'wafflecss';
    <Heading
        data={{
            headingText: 'Supreme allied commander'
        }}
        options={{
            size: 'small'
        }}
  />
```

# Props

## Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | string |

## Events
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  true | Function |
| onFocus |  true | Function |

## Options
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  true | `sm / md / lg` |
| id |  true | string |