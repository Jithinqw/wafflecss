# Legal Text

Legal Text is a react component for displaying legal text. 

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/legaltext--large-size-legal-text).

## Usage

```javascript
    import { LegalText } from 'wafflecss';
    
    <LegalText 
        data={{
            displayText: 'Plans may vary from time to time according to A.P.R of each month.'
        }}
        options={{
            legalTextSize: 'sm'
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string | React.ReactNode` |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | `Function` |

### Options

| Prop Name   |      Is Optional      |  Type |
|----------|:-------------:|------:|
| legalTextSize |  true | `sm | md | lg` |
| style |    true   |   `IStyleOptions` |
| className |    true   |   `string` |
