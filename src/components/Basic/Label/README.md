# Label
This component is displayed as an accessible label.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/story/label--default-label).

## Example

```javascript
    import { Label } from 'wafflecss';
    
    <Label 
        data={{
            displayText: 'Demo Label Content'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string / React.ReactNode` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  true | `sm / md / lg` |
| color |  true | `string` |
| fontSize |  true | `string` |
| fontFamily |  true | `string` |
| id |  true | `string` |
| className |  true | `string` |
