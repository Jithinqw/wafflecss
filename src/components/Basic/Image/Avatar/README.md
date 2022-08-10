# Avatar

A React component for rendering user image avatars.

## Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/avatar--avatar-default).

## Usage

```javascript
    import { Avatar } from 'wafflecss';
    
    <Avatar
        data={{
            imageSrc: 'https://bit.ly/dan-abramov'
        }}
        options={{
            avatarType: 'rounded'
        }}
    />
```

## Props

### Data
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| imageSrc |  false | string |
| borderColor |  false | string |
| alt |  false | string |
| height |  false | string |
| width |  false | string |
| avatarText |  false | string |

### Events
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| onLoad |  true | Function |
| onClick |  true | Function |

### Options
| Prop Name   |Is Optional    |  Type |
|----------|:-------------:|------:|
| avatarType |  true | `rounded / rect / bordered / text` |
| className |  true | string |