# Modal

React component for rendering a Modal component.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/modal--default).

## Usage

```javascript
    import { Modal, LegalText } from 'wafflecss';

    <Modal
        data={{
            modalBodyNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service'
                    }} 
                    options={{
                        legalTextSize: 'sm'
                    }}
                />
            ),
        }}
        options={{
            isVisible: true
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| modalHeadingNode |  false |  `string / React.ReactNode` |
| modalBodyNode |  false |  `string / React.ReactNode` |
| modalFooterNode |  false |  `string / React.ReactNode` |

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| isVisible |  false |  `boolean` |
