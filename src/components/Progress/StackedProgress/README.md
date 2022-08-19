# Stacked Progress

Stacked Progress component for progress.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/stackedprogress--progress-default).

## Usage

```javascript
    import { StackedProgress } from 'wafflecss';

    <StackedProgress
        data={[
            {
                bgColor: 'pink',
                width: 16.8
            },
            {
                bgColor: 'red',
                width: 26.7
            },
            {
                bgColor: 'blue',
                width: 13.7
            },
            {
                bgColor: 'teal',
                width: 5.3
            },
            {
                bgColor: 'black',
                width: 21.7
            },
            {
                bgColor: 'orange',
                width: 15.7
            }
        ]}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| IProgressData |  false |  `Array<IProgressData>`|

### Options
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| height |  false |  `string` |
| borderRadius |  false |  `string` |
