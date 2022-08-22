# Announcement

A React component used to alert users of a particular annoncement.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/announcement--annocement-default).

# Usage

```javascript
    import { Announcement } from 'wafflecss';
    
    <Announcement
        data={{
            displayNode: 'This is a button'
        }}
    />
```

# Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayNode |  false | `string | React.ReactNode` |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onDismiss |  true | `Function` |

### Options

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| className |  true | `string` |
| id |  true | `string` |

