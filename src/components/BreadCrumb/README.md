# BreadCrumb

Breadcrumbs help users visualize their current location in relation to the rest of the website or application by showing the hierarchy of pages.

## Usage

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/breadcrumb--default-bread-crumb).

## Example

```javascript
    import { BreadCrumb } from 'wafflecss';

    const crumbData = [
        { displayText: 'Home' },
        { displayText: 'Profile' },
        { displayText: 'Update Password' },
        { displayText: 'Upload Photo' },
    ];
    <BreadCrumb
        data={{
            crumbData
        }}
        options= {{
            color: 'teal',
            seperator: '*',
            seperatorSize: '30px',
            linkSize: 'sm',
            className: 'breadCrumbWrapper'
        }}
    />
```

## Props

### Data

| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| displayText |  false | `string` |

### Events

| Prop Name   |      Is Optional       |  Type |
|----------|:-------------:|------:|
| onClick |  true | `Function` |

### Options

| Prop Name   |      Is Optional      |  Type |
|----------|:-------------:|------:|
| seperator |  true | `boolean` |
| color |    true   |   `string` |
| className |    true   |   `string` |
| seperatorSize |    true   |   `string` |
| linkSize  |    true   |   `sm / md / lg` |
