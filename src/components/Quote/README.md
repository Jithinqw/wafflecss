# Quote

A react component for rendering a Quote.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/quote--default-quote).

## Usage

```javascript
    import { Quote, LegalText } from 'wafflecss';

    <Quote
        displayNode={
            <LegalText 
                data={{
                    displayText: 'When something is important enough, you do it even if the odds are not in your favour'
                }} 
                options={{
                    legalTextSize: 'md'
                }}
            />
        }
        onClick={function}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayNode |  false |  `string / React.ReactNode` |
| bgColor |  false |  `string` |
| highlightColor |  false |  `string` |
| onClick |  false |  `Function` |
