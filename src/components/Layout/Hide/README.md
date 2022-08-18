# Hide

React component for hiding component, with support of 
screen reader, visually hidden and hidden.


## Example

```javascript
    import { Hidden } from 'wafflecss';

    <Hidden
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
        options={{
            type: 'sr'
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
| type |  true | `sr / none-sr | hidden` |

