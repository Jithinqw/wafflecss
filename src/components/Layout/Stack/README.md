# Stack

React component for stacking React component.


## Example

```javascript
    import { Stack, LegalText } from 'wafflecss';

    <Stack>
            <LegalText
                data={{
                    displayText: 'Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location.'
                }}
            />
            <LegalText
                data={{
                    displayText: 'And say Hey Apple.'
                }}
            />
            <LegalText
                data={{
                    displayText: 'Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location.'
                }}
            />
    </Stack>
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| id |  true | `string` |
| className |  true | `string` |
| align |  true | `center/stretch/flex-start/flex-end` |
| justify |  true | `center/flexStart/flex-end/space-between/space-around` |
| gap |  true | `string` |

