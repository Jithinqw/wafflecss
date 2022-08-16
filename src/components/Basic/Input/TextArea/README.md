# TextArea

React component for rendering text area.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/switch--switch-primary).

## Usage

```javascript
import { Switch } from 'wafflecss';
    <Switch />
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
| rows |  false | `number` |
| cols |  false | `number` |

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
| isReadonly |  true | `boolean` |
| className |  true | `string` |
| maxLength |  true | `number` |
| accessibility |  true | `string` |
| isRequired |  true | `boolean` |
