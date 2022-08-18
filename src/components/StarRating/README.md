# Star Rating

A React component for showing star rating.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/starrating--star-rating-template).

## Usage

```javascript
    import { StarRating } from 'wafflecss';

    <StarRating
        defaultStarSelection={3}
        maxStarNum={5}
        onClick={}
        size="sm"
    />
```

## Props

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| maxStarNum |  false | `number` |
| defaultColor |  false | `string` |
| defaultStarSelection |  false | `number` |
| highlightColor |  false | `string` |
| size |  false | `sm / md / lg` |
| onClick |  false | `Function` |
 