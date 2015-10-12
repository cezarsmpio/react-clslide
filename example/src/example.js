var React = require('react');
var ReactDOM = require('react-dom');
var CLSlide = require('react-clslide');

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

var App = React.createClass({
	render () {
		return (
			<div>
        <h1>Usage</h1>
        <h2>Props</h2>

        <pre>{`{
  items: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number,
  full: React.PropTypes.bool,
  effect: React.PropTypes.string, // fade, horizontal, vertical or random
  transitionDuration: React.PropTypes.string, // Ex.: .5s (as CSS)
  auto: React.PropTypes.number // 3000 = 3 seconds
}`}</pre>

        <h2>Your data source:</h2>
        <pre>
{`var items = [
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
];`}</pre>

        <pre>{`<CLSlide items={items} effect="fade" width={600} height={200} />`}</pre>
        <CLSlide items={items} effect="fade" width={600} height={200} />

        <pre>{`<CLSlide items={items} effect="horizontal" width={200} height={200} />`}</pre>
        <CLSlide items={items} effect="horizontal" width={200} height={200} />

        <pre>{`<CLSlide items={items} effect="vertical" width={400} height={200} />`}</pre>
        <CLSlide items={items} effect="vertical" width={400} height={200} />

        <pre>{`<CLSlide items={items} auto={3000} full height={450} />`}</pre>
        <CLSlide items={items} auto={3000} full height={450} />


			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
