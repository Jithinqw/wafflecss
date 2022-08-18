# Stack

React component for stacking React component.


## Example

```javascript
    import { Stack, LegalText } from 'wafflecss';

    <Stack>
        <div>
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
        </div>
    </Stack>
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| children |  false | `React.ReactNode | string` |
| id |  true | `string` |
| className |  true | `string` |
