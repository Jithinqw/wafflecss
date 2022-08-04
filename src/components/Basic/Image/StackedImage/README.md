# Stacked Image

An image component to render staxked Avatar images.

# Example

A deployed version can be found [here](https://wafflecss-jithinqw.vercel.app/?path=/docs/stackedimage--image-default).

# Usage

```javascript
    import { StackedImage } from 'wafflecss';
    
    <StackedImage
        data={{
            imageData: [
                {
                    height: '60',
                    imageSource: 'https://bit.ly/dan-abramov',
                    width: '60'
                },
                {
                    height: '60',
                    imageSource: 'https://bit.ly/dan-abramov',
                    width: '60'
                },
                {
                    height: '60',
                    imageSource: 'https://bit.ly/dan-abramov',
                    width: '60'
                },
                {
                    height: '60',
                    imageSource: 'https://bit.ly/dan-abramov',
                    width: '60'
                }
            ]
        }}
    />
```