import React, {useState} from 'react'
import './index.css'

const Welcome = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome</h1>
      <p className="subscribe-message">Thank you! Happy Learning</p>
      <button className="subscribe-button" onClick={handleButtonClick}>
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}

export default Welcome
