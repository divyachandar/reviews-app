// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewLength = reviewsList.length
    if (index < reviewLength) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[index]
    console.log(reviewsList.length)
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-btn"
            type="button"
            onClick={this.onClickLeftArrow}
            data-testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="arrow-btn"
            type="button"
            data-testId="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="
https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
