import React from 'react';
import classnames from 'classnames';

function setSlideStyle(prop) {
  let slideStyle = {
    container: {},
    list: {},
    item: {},
    buttons: {}
  };

  // Set slide style
  slideStyle.container.width = !(prop.full) ? prop.width : '100%';
  slideStyle.container.maxWidth = '100%';
  slideStyle.container.height = prop.height;
  slideStyle.container.transition = `all ${prop.transitionDuration}`;

  // Set slide list style
  slideStyle.list.transition = `all ${prop.transitionDuration}`;
  slideStyle.list.height = `${prop.height}px`;
  slideStyle.list.width = `${(prop.items.length * 100)}%`;


  // Set slide item style
  slideStyle.item.transition = `all ${prop.transitionDuration}`;
  slideStyle.item.width = `${(100 / prop.items.length)}%`;
  slideStyle.item.height = `${this.props.height}px`;

  // Set buttons style
  slideStyle.buttons.transition = `all ${prop.transitionDuration}`;

  return slideStyle;
}


class CLSlideItem extends React.Component {

  render() {
    var item = this.props.item;

    var itemClassname = classnames({
      'react-slide-item': true,
      'react-slide-item-active': this.props.active,
      'react-slide-item-fade': this.props.effect === 'fade'
    });

    return (

      <li style={this.props.style} className={itemClassname}>
        <span
          style={{
            backgroundImage: `url(${item.url})`
          }}
          className="react-slide-item-image">
        </span>

        {item.caption ? <p style={{transition: this.props.style.transition}} className="react-slide-item-caption">{item.caption}</p> : null}
      </li>
    );
  }

}

CLSlideItem.propTypes = {
  active: React.PropTypes.bool.isRequired,
  effect: React.PropTypes.string.isRequired,
  item: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired
};


/**
 * Slide with <ul> list container
 */
class CLSlideList extends React.Component {

  render() {
    let active = this.props.active;
    let effect = this.props.effect;
    var style = this.props.style.list;

    let translate = (effect === 'horizontal') ? -((100 / this.props.items.length) * active) : -(100 * active);

    // Transition is horizontal --->
    if (effect === 'horizontal') {
      style.transform = `translateX(${translate}%)`;
    }
    else if (effect === 'vertical') {
      style.transform = `translateY(${translate}%)`;
    }

    let slideClassname = classnames({
      'react-slide-list': true,
      'react-slide-list-horizontal': effect === 'horizontal',
      'react-slide-list-vertical': effect === 'vertical',
      'react-slide-list-fade': effect === 'fade'
    });

    return (
      <ul
        className={slideClassname}
        style={style}
      >

        {this.props.items.map((item, i) => {
          return (
            <CLSlideItem
              active={this.props.active === i}
              dimensions={[(100 / this.props.items.length), this.props.dimensions[1]]}
              effect={this.props.effect}
              item={item}
              key={i}
              style={this.props.style.item}
            />
          );
        })}

      </ul>
    );
  }

}

CLSlideList.propTypes = {
  active: React.PropTypes.number.isRequired,
  dimensions: React.PropTypes.array.isRequired,
  effect: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  style: React.PropTypes.object.isRequired
};


/**
 * React Slide
 * The main container of slide
 */
class CLSlide extends React.Component {

  constructor(props) {
    super(props);

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
    var events = [
      'prevSlide',
      'nextSlide',
      'getEffect',
      'autoSlide',
      'pauseSlide',
      'startSlide'
    ];

    for (var i = 0, t = events.length; i < t; i++) {
      this[events[i]] = this[events[i]].bind(this);
    }
  }

  autoSlide(timer) {
    this.auto = setInterval(() => {
      this.nextSlide();
    }, timer);
  }

  pauseSlide() {
    if (this.props.auto) {
      clearInterval(this.auto);
    }
  }

  startSlide() {
    if (this.props.auto) {
      this.autoSlide(this.props.auto);
    }
  }

  prevSlide() {
    let itemActive = this.state.itemActive;
    let items = this.props.items;

    this.setState({
      itemActive: itemActive === 0 ? items.length - 1 : itemActive - 1
    });
  }

  nextSlide() {
    let itemActive = this.state.itemActive;
    let items = this.props.items;

    this.setState({
      itemActive: itemActive === (items.length - 1) ? 0 : itemActive + 1
    });
  }

  getEffect() {
    var effect = this.props.effect;
    var effects = ['horizontal', 'vertical', 'fade'];
    var random = effects[parseInt(Math.random() * effects.length)];

    return (effect === 'random') ? random : (effects.indexOf(effect) >= 0) ? effect : random;
  }

  render() {
    var style = this.state.slideStyle;

    return (
      <div
        className="react-slide-container"
        style={style.container}
        onMouseEnter={this.pauseSlide}
        onMouseLeave={this.startSlide}
      >
        <CLSlideList
          active={this.state.itemActive}
          effect={this.state.effect}
          items={this.props.items}
          dimensions={[this.props.width, this.props.height]}
          style={style}
        />

        <button style={style.buttons} className="react-slide-button react-slide-button-prev" onClick={this.prevSlide}>&laquo;</button>
        <button style={style.buttons} className="react-slide-button react-slide-button-next" onClick={this.nextSlide}>&raquo;</button>
      </div>
    );
  }

}

CLSlide.propTypes = {
  auto: React.PropTypes.number,
  effect: React.PropTypes.string,
  full: React.PropTypes.bool,
  height: React.PropTypes.number.isRequired,
  items: React.PropTypes.array.isRequired,
  transitionDuration: React.PropTypes.string,
  width: React.PropTypes.number
};

CLSlide.defaultProps = {
  auto: 0,
  effect: 'random',
  full: false,
  transitionDuration: '.3s'
};


export default CLSlide;
