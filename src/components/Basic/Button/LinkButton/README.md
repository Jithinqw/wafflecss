# LinkButton

React component for showing a link button.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/linkbutton--link-button-lg).

# Usage

```javascript
    import { LinkButton } from 'wafflecss';
    <LinkButton
        data={{
            displayText: 'See more Plans'
        }}
        options={{
            size: 'sm'
        }}
    />
```

# Props

## Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string / React.ReactNode` |

## Events
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  true | `Function` |
| onFocus |  true | `Function` |
| onKeyDown | true | `Function` |

## Options
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  true | `sm / md / lg` |
| id |  true | `string` |
| className |  true | `string` |