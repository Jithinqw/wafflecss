# Image

Image is for rendering an image on React Tree.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/image--image-default).

# Usage

```javascript
    import { Image } from 'wafflecss';

    <Image
        data={{
            imageSrc: 'https://bit.ly/dan-abramov'
        }}
    />

    // User can also pass fallback image if primary
    // image url fails to render
    <Image
        data={{
        fallbackImageSrc: 'https://avatars.githubusercontent.com/u/20675707?s=400&u=55a84a1aa15319882892c57d6d7aef0d362c4c00&v=4',
        imageSrc: 'some random link'
    }}
 />
```