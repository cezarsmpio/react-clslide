# CLSlide

A simple, responsive and awesome React slideshow.


## Demo & Examples

Live demo: [CezarLuiz0.github.io/react-clslide](http://CezarLuiz0.github.io/react-clslide/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-clslide is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-clslide.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-clslide --save
```


## Usage

```
var ClSlide = require('react-clslide');

<CLSlide items={items} effect="fade" width={600} height={200} />

<CLSlide items={items} effect="horizontal" width={200} height={200} />

<CLSlide items={items} effect="vertical" width={400} height={200} />

<CLSlide items={items} full height={450} />
```

### Properties

#### Required

* items - [object] - Your data source, an array of object like { caption: 'Your caption', url: 'http://image.url/here' }
* height - number - In number, for example, {300}

#### Others

* width - number - like height, {600}
* full - bool - A 100% slide
* effect - string - fade, horizontal, vertical or random
* transitionDuration - string - like css, '.3s', '1s', '100ms'
* auto - number - the miliseconds for auto slide

#### CSS Classes
* .react-slide-container
* .react-slide-list
* .react-slide-list-horizontal
* .react-slide-list-vertical
* .react-slide-item
* .react-slide-item-fade
* .react-slide-item-active
* .react-slide-item-image
* .react-slide-item-caption
* .react-slide-button
* .react-slide-button-prev
* .react-slide-button-next

#### Examples

Data source:
```
var items = [
  {
    caption: 'A lovely caption',
    url: 'http://loremflickr.com/640/300/cat'
  },
  { url: 'http://loremflickr.com/640/300/dog' },
  {
    caption: 'Another awesome caption',
    url: 'http://loremflickr.com/640/300/nature'
  },
  {
    url: 'http://loremflickr.com/640/300/rock'
  },
  {
    caption: 'Another awesome caption',
    url: 'http://loremflickr.com/640/300/paris'
  },
  {
    url: 'http://loremflickr.com/640/300/shoes'
  },
  {
    caption: 'Simple and awesome slideshow!',
    url: 'http://loremflickr.com/640/300/clothes'
  }
];
```


### Notes

React 0.14.0 support and mobile browsers


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) 2015 Cezar Luiz.

