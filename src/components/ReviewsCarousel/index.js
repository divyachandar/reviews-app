// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    return (
      <div className="app-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <img src="" alt="" className="review-image" />
          <div className="arrow-container">
            <button type="button" onClick={this.onClickLeftArrow}>
              <img src="" alt="" />
            </button>
            <p className="user-name"></p>
            <button type="button" onClick={this.onClickRightArrow}>
              <img src="" alt="" />
            </button>
          </div>
          <p className="company-name"></p>
          <p className="description"></p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
