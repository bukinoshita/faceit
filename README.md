# faceit
> Diverse user images for user interface design

[![GitHub release](https://img.shields.io/github/release/bukinoshita/faceit.svg)](https://www.npmjs.com/package/faceit)
[![license](https://img.shields.io/github/license/bukinoshita/faceit.svg)](https://raw.githubusercontent.com/bukinoshita/faceit/master/LICENSE)

faceit is a hack way to get images from [DiverseUI](https://www.diverseui.com/). It's not bullet proof and it's not perfect. It was created with prototyping/mocking up user interface purpose only. It's not recommended to use in production because the requests may fail.

## Install
```bash
$ npm install faceit
```

## Usage
```js
import faceit from 'faceit'

faceit.random()
// => https://random-url-faceit-image.jpg

faceit.male()
// => https://random-url-faceit-male-image.jpg

faceit.female()
// => https://random-url-faceit-female-image.jpg
```

## API
### .random()
Type: `string`<br/>
Random faceit image

### .male()
Type: `string`<br/>
Random faceit male image

### .female()
Type: `string`<br/>
Random faceit female image

## License
[MIT](https://github.com/bukinoshita/faceit/blob/master/LICENSE) &copy; Bu Kinoshita

[DiverseUI](https://www.diverseui.com/)
