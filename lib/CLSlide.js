'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function setSlideStyle(prop) {
  var slideStyle = {
    container: {},
    list: {},
    item: {},
    buttons: {}
  };

  // Set slide style
  slideStyle.container.width = !prop.full ? prop.width : '100%';
  slideStyle.container.maxWidth = '100%';
  slideStyle.container.height = prop.height;
  slideStyle.container.transition = 'all ' + prop.transitionDuration;

  // Set slide list style
  slideStyle.list.transition = 'all ' + prop.transitionDuration;
  slideStyle.list.height = prop.height + 'px';
  slideStyle.list.width = prop.items.length * 100 + '%';

  // Set slide item style
  slideStyle.item.transition = 'all ' + prop.transitionDuration;
  slideStyle.item.width = 100 / prop.items.length + '%';
  slideStyle.item.height = this.props.height + 'px';

  // Set buttons style
  slideStyle.buttons.transition = 'all ' + prop.transitionDuration;

  return slideStyle;
}

var CLSlideItem = (function (_React$Component) {
  _inherits(CLSlideItem, _React$Component);

  function CLSlideItem() {
    _classCallCheck(this, CLSlideItem);

    _get(Object.getPrototypeOf(CLSlideItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CLSlideItem, [{
    key: 'render',
    value: function render() {
      var item = this.props.item;

      var itemClassname = (0, _classnames2['default'])({
        'react-slide-item': true,
        'react-slide-item-active': this.props.active,
        'react-slide-item-fade': this.props.effect === 'fade'
      });

      return _react2['default'].createElement(
        'li',
        { style: this.props.style, className: itemClassname },
        _react2['default'].createElement('span', {
          style: {
            backgroundImage: 'url(' + item.url + ')'
          },
          className: 'react-slide-item-image' }),
        item.caption ? _react2['default'].createElement(
          'p',
          { style: { transition: this.props.style.transition }, className: 'react-slide-item-caption' },
          item.caption
        ) : null
      );
    }
  }]);

  return CLSlideItem;
})(_react2['default'].Component);

CLSlideItem.propTypes = {
  active: _react2['default'].PropTypes.bool.isRequired,
  effect: _react2['default'].PropTypes.string.isRequired,
  item: _react2['default'].PropTypes.object.isRequired,
  style: _react2['default'].PropTypes.object.isRequired
};

/**
 * Slide with <ul> list container
 */

var CLSlideList = (function (_React$Component2) {
  _inherits(CLSlideList, _React$Component2);

  function CLSlideList() {
    _classCallCheck(this, CLSlideList);

    _get(Object.getPrototypeOf(CLSlideList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CLSlideList, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var active = this.props.active;
      var effect = this.props.effect;
      var style = this.props.style.list;

      var translate = effect === 'horizontal' ? -(100 / this.props.items.length * active) : -(100 * active);

      // Transition is horizontal --->
      if (effect === 'horizontal') {
        style.transform = 'translateX(' + translate + '%)';
      } else if (effect === 'vertical') {
        style.transform = 'translateY(' + translate + '%)';
      }

      var slideClassname = (0, _classnames2['default'])({
        'react-slide-list': true,
        'react-slide-list-horizontal': effect === 'horizontal',
        'react-slide-list-vertical': effect === 'vertical',
        'react-slide-list-fade': effect === 'fade'
      });

      return _react2['default'].createElement(
        'ul',
        {
          className: slideClassname,
          style: style
        },
        this.props.items.map(function (item, i) {
          return _react2['default'].createElement(CLSlideItem, {
            active: _this.props.active === i,
            dimensions: [100 / _this.props.items.length, _this.props.dimensions[1]],
            effect: _this.props.effect,
            item: item,
            key: i,
            style: _this.props.style.item
          });
        })
      );
    }
  }]);

  return CLSlideList;
})(_react2['default'].Component);

CLSlideList.propTypes = {
  active: _react2['default'].PropTypes.number.isRequired,
  dimensions: _react2['default'].PropTypes.array.isRequired,
  effect: _react2['default'].PropTypes.string.isRequired,
  items: _react2['default'].PropTypes.array.isRequired,
  style: _react2['default'].PropTypes.object.isRequired
};

/**
 * React Slide
 * The main container of slide
 */

var CLSlide = (function (_React$Component3) {
  _inherits(CLSlide, _React$Component3);

  function CLSlide(props) {
    _classCallCheck(this, CLSlide);

    _get(Object.getPrototypeOf(CLSlide.prototype), 'constructor', this).call(this, props);

    // Set state
    this.state = {
      itemActive: 0,
      effect: this.getEffect(),
      slideStyle: setSlideStyle.apply(this, [this.props])
    };

    // Check if slide is automatic
    if (this.props.auto) {
      console.log('auto');
      this.autoSlide(this.props.auto);
    }

    // Bind methods
    var events = ['prevSlide', 'nextSlide', 'getEffect', 'autoSlide', 'pauseSlide', 'startSlide'];

    for (var i = 0, t = events.length; i < t; i++) {
      this[events[i]] = this[events[i]].bind(this);
    }
  }

  _createClass(CLSlide, [{
    key: 'autoSlide',
    value: function autoSlide(timer) {
      var _this2 = this;

      this.auto = setInterval(function () {
        _this2.nextSlide();
      }, timer);
    }
  }, {
    key: 'pauseSlide',
    value: function pauseSlide() {
      if (this.props.auto) {
        clearInterval(this.auto);
      }
    }
  }, {
    key: 'startSlide',
    value: function startSlide() {
      if (this.props.auto) {
        this.autoSlide(this.props.auto);
      }
    }
  }, {
    key: 'prevSlide',
    value: function prevSlide() {
      var itemActive = this.state.itemActive;
      var items = this.props.items;

      this.setState({
        itemActive: itemActive === 0 ? items.length - 1 : itemActive - 1
      });
    }
  }, {
    key: 'nextSlide',
    value: function nextSlide() {
      var itemActive = this.state.itemActive;
      var items = this.props.items;

      this.setState({
        itemActive: itemActive === items.length - 1 ? 0 : itemActive + 1
      });
    }
  }, {
    key: 'getEffect',
    value: function getEffect() {
      var effect = this.props.effect;
      var effects = ['horizontal', 'vertical', 'fade'];
      var random = effects[parseInt(Math.random() * effects.length)];

      return effect === 'random' ? random : effects.indexOf(effect) >= 0 ? effect : random;
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.state.slideStyle;

      return _react2['default'].createElement(
        'div',
        {
          className: 'react-slide-container',
          style: style.container,
          onMouseEnter: this.pauseSlide,
          onMouseLeave: this.startSlide
        },
        _react2['default'].createElement(CLSlideList, {
          active: this.state.itemActive,
          effect: this.state.effect,
          items: this.props.items,
          dimensions: [this.props.width, this.props.height],
          style: style
        }),
        _react2['default'].createElement(
          'button',
          { style: style.buttons, className: 'react-slide-button react-slide-button-prev', onClick: this.prevSlide },
          '«'
        ),
        _react2['default'].createElement(
          'button',
          { style: style.buttons, className: 'react-slide-button react-slide-button-next', onClick: this.nextSlide },
          '»'
        )
      );
    }
  }]);

  return CLSlide;
})(_react2['default'].Component);

CLSlide.propTypes = {
  auto: _react2['default'].PropTypes.number,
  effect: _react2['default'].PropTypes.string,
  full: _react2['default'].PropTypes.bool,
  height: _react2['default'].PropTypes.number.isRequired,
  items: _react2['default'].PropTypes.array.isRequired,
  transitionDuration: _react2['default'].PropTypes.string,
  width: _react2['default'].PropTypes.number
};

CLSlide.defaultProps = {
  auto: 0,
  effect: 'random',
  full: false,
  transitionDuration: '.3s'
};

exports['default'] = CLSlide;
module.exports = exports['default'];