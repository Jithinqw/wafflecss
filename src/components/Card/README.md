# Card

A react component for showing cards.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/card--card-template).

## Example

```javascript
    import { Heading, Card } from 'wafflecss';

    <Card
        data={{
            cardBodyNode: (
                <Heading 
                    data={{
                        headingText: 'Heading body'
                    }} 
                />
            ),
            cardFooterNode: (
                <Heading 
                    data={{
                        headingText: 'Footer'
                    }} 
                />
            ),
            cardTitleNode: (
                <Heading 
                    data={{
                        headingText: 'Heading'
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
| cardTitleNode |  false | `React.ReactNode` |
| cardBodyNode |  false | `React.ReactNode` |
| cardFooterNode |  false | `React.ReactNode` |

