# Skeleton

React componenent for rendering Skeleton.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/skeleton--column-skeleton).

## Usage

```javascript
    import { Skeleton } from 'wafflecss';

    <Skeleton
        options={{
            color: 'teal',
            type: 'col'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| color |  false |  `string` |
| height |  false |  `sm / xs / lg` |
| weight |  false |  `sm / xs / lg` |
| type |  false |  `col / circle ` |
| id |  false |  `string` |
| className |  false |  `string` |
