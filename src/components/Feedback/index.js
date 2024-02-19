import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSubmitted: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="app-container">
        {!isFeedbackSubmitted ? (
          <div className="feedback-question-container">
            <h1 className="feedback-question-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-list">
              {emojis.map(emoji => (
                <li
                  key={emoji.id}
                  className="emoji-item"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="thank-you-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="thank-you-text">We appreciate your feedback.</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
