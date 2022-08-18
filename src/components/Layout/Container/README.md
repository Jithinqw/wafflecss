# Container

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/container--container-default).

## Example

```javascript
    import { Container, LegalText } from 'wafflecss';

    <Container
        data={{
            children: (
                <LegalText 
                        data={{
                            displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service'
                        }} 
                    options={{
                        legalTextSize: 'lg'
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
| children |  false | `React.ReactNode | string` |


### Options

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| size |  false | `'sm' / 'md' / 'lg'` |
| backgroundColor |  false | `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false | `Function` |
