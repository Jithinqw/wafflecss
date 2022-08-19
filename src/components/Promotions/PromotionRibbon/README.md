# Promotion Ribbon

React component for rendering Promotion Ribbon

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/promotionribbon--star-rating-template).

## Usage

```javascript
    import { PromotionRibbon, Heading } from 'wafflecss';
    <PromotionRibbon
        data={{
            children: (
                <Heading 
                    data={{
                        headingText: 'Promotions'
                    }}
                    options={{
                        headingColor: 'white'
                    }}
                />
            )
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| children |  false |  `string / React.ReactNode` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false |  `Function` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| position |  false |  `left | right` |
| color |  false |  `string` |
| backgroundColor |  false |  `string` |