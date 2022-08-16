# PinInput

React component for displaying numerical pin.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/pininput--default-pin-input).

## Usage

```javascript
    import { TextInput } from 'wafflecss';
    
    <PinInput
        data={{
            placeholder: '*',
            value: '2'
        }}
        options={{
            size: 'lg'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| placeholder |  false | `string` |
| id |  false | `string` |
| isDisabled |  false | `boolean` |
| value |  false | `string` |
| name |  false | `string` |
| isError |  false | `boolean` |
| errorBorderColor |  false | `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onChange |  true | `Function` |
| onFocus |  true | `Function` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  true | `xs / sm / md / lg` |
| className |  true | `string` |