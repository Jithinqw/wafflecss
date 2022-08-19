# TopBanner

React component for rendering a Promotion top banner component.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/topbanner--toggleprimary).

## Usage

```javascript
    import { TopBanner } from 'wafflecss';

    <TopBanner
        data={{
            displayText: 'Here is the new feature...'
        }}
        options={{
            bannerType: 'info'
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false |  `string` |

### Events
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false |  `Function` |

### Options
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| bannerType |  false |  `danger / info / success / warning` |