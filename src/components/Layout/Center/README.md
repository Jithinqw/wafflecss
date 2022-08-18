# Center

React component for aligning all content to center.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/center--center-align).

## Example

```javascript
    import { Center } from 'wafflecss';

    <Center
        data={{
            backgroundColor: 'teal',
            children: (
                <Heading 
                    data={{
                        headingText: 'Demo'
                    }} 
                />
            ),
            height: '100px',
            width: '100px'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| height |  false | `string` |
| children |  false | `React.ReactNode` |
| width |  false | `string` |
| color |  false | `string` |
| backgroundColor |  false | `string` |
| id |  false | `string` |

### Events

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onClick |  false | `Function` |
