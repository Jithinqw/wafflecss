# Dropdown

React component for displaying dropdown.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/dropdown--default).

## Usage

```javascript
    import { Dropdown } from 'wafflecss';

    <Dropdown
        data={{
            optionData: [
                {
                    displayText: 'Apple',
                    value: 'www.apple.com'
                },
                {
                    displayText: 'Google',
                    value: 'www.google.com'
                },
            ]
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| optionData |  false | `Array<ISelectOption>` |
| disabled |  false | `boolean` |

### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| variants |  false | `sm / md / lg` |
| color |  false | `string` |
| bgColor |  false | `string` |
| className |  false | `string` |
| id |  false | `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onChange |  false | `Function` |