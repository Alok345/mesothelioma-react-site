const Header = ({ currentTime }) => {
  return (
    <header className="header">
      <div className="container">
        {/* Mobile Time Display */}
        <div className="mobile-time">
          <div className="current-time">{currentTime}</div>
        </div>

        <div className="header-content">
          <div className="header-left">
            <div className="free-review-badge">Free Case Review</div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>100% Confidential</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>No Win, No Fee</span>
            </div>
          </div>

          <div className="header-right">
            <div className="help-text">We are here to help!</div>
            <div className="evaluation-text">Free Case Evaluation</div>
            {/* Desktop Time Display */}
            <div className="desktop-time">Current Time: {currentTime}</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
