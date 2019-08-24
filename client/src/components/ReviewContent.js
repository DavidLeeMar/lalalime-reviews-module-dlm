import React from 'react';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  
  }

  render() {
    return (
      <div className="review-content">
        <div>review date</div>
        <div>review title</div>
        <div>review body</div>
        <div className="review-footer">
          <span>was this reivew helpful to you</span>
          <span><a href="#" title="Yes">yes</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
          {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
          <span><a href="#" title="No">no</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
          {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
          <span><a href="#" title="Report">report as inappropriate</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
        </div>
      </div>
    )
  }
}

export default ReviewContent;