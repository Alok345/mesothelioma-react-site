const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Have you or a loved one been affected by <span className="highlight">Mesothelioma?</span>
        </h1>

        <p className="hero-subtitle">
          As a woman, you've carried the weight of care, love, and resilience. Now it's time someone stands with you.
        </p>

        <div className="key-points">
          <div className="point-item">
            <div className="bullet-point"></div>
            <p>Secondary Asbestos exposure is common</p>
          </div>
          <div className="point-item">
            <div className="bullet-point"></div>
            <p>Misdiagnosis delays are more frequent in women</p>
          </div>
          <div className="point-item">
            <div className="bullet-point"></div>
            <p>Women have won significant legal settlements</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Professional legal representation"
          className="hero-img"
        />
      </div>
    </div>
  )
}

export default HeroSection
