# TextInput

Input component is a component that is used to get user input in a text field.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/textinput--default-text-input).

## Usage

```javascript
  import { TextInput } from 'wafflecss';

  <TextInput
    data={{
      placeholder: 'TextInput Placeholder',
      value: ''
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
| onKeyPress |  true | `Function` |
| onBlur |  true | `Function` |
| onFocus |  true | `Function` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  true | `xs / sm / md / lg` |
| className |  true | `string` |
| maxLength |  true | `number` |
| accessibility |  true | `string` |
| type |  true | `email / text / number / password` |
