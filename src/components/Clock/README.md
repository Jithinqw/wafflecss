# TimerClock

A countdown timer React component.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/timer-clock--timer-component-default).

## Example

```javascript
    import { TimerClock } from 'wafflecss';

    const date = new Date()
    date.setDate(date.getDate() + 7);

    <TimerClock
        endtime={date.toString()}
    />

```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| endtime |  false | `string` |
| labelType |  true | `lower / upper` |
| colorSquash |  true | `TimerColor` |
| className |  true | `string` |
| id |  true | `string` |