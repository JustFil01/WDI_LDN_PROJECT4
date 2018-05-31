import React from 'react';
import Carousel from 'nuka-carousel';
//------------------------------------------------------------------------------
class BoxCarousel extends React.Component {
  state = {
    invisible: true
  }
  //----------------------------------------------------------------------------
  componentDidMount() {
    setTimeout(() => {
      this.carousel.setDimensions();
      this.setState({ invisible: false });
    }, 1500);
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <Carousel
        className={`field carousel ${this.state.invisible ? 'is-invisible' : ''}`}
        cellAlign="center"
        slideWidth={0.6}
        cellSpacing={500}
        ref={elem => this.carousel = elem}>

        {this.props.game.screenshots && this.props.game.screenshots.map(screenshot =>
          <div key={screenshot._id}>
            <div className="screenshot">
              {screenshot.url && <img
                src ={`${screenshot.url}`}
              />}
            </div>
          </div>
        )}
      </Carousel>
    );
  }
}
//------------------------------------------------------------------------------
export default BoxCarousel;
