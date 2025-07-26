"use client";

import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    dateOfDiagnosis: "",
    jobTitle: "",
    typeOfDiagnosis: "",
    story: "",
    agreeToTerms: false,
    verifyHuman: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms || !formData.verifyHuman) {
      setSubmitMessage("Please complete all required fields and checkboxes.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: JSON.stringify(formData),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(
          "✅ Thank you! Your claim form has been submitted successfully. We'll contact you soon."
        );
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
          dateOfDiagnosis: "",
          jobTitle: "",
          typeOfDiagnosis: "",
          story: "",
          agreeToTerms: false,
          verifyHuman: false,
        });
      } else {
        setSubmitMessage(
          `❌ Error: ${
            result.error || "Failed to submit form. Please try again."
          }`
        );
      }
    } catch (error) {
      setSubmitMessage(
        "❌ Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      {/* Background Image */}
      <div className="background-image"></div>

      <div className="main-container">
        {/* Left Column */}
        <div className="left-column">
          {/* Free Case Review Card */}
          <div className="free-case-card-split">
            <div className="circular-badge">
              <div className="badge-content">
                <span className="badge-only">ONLY</span>
                <span className="badge-six">6</span>
                <span className="badge-days">DAYS</span>
                <span className="badge-left">LEFT</span>
              </div>
            </div>
            <div className="free-case-card-left">
              <div className="card-title-stack">
                <h1 className="main-title" style={{ color: "black" }}>
                  Free
                </h1>
                <h1 className="main-title">Case</h1>
                <h1 className="main-title">Review</h1>
              </div>
              <div className="features-section">
                <div className="feature-row">
                  <div className="feature-icon blue-shield">🛡️</div>
                  <span className="feature-text">100% Confidential</span>
                </div>
                <div className="feature-row">
                  <div className="feature-icon purple-check">✓</div>
                  <span className="feature-text">No Win, No Fee</span>
                </div>
                <div className="feature-row">
                  <div className="feature-icon orange-star">⭐</div>
                  <span className="feature-text">Free Case Evaluation</span>
                </div>
              </div>
            </div>
            <div className="free-case-card-right">
              <div className="help-area">
                <p className="help-line">
                  We are here
                  <br />
                  to help!
                </p>
              </div>
              <button className="contact-button">
                <span>Contact us</span>
                {/* <span className="button-arrow">→</span> */}
              </button>
            </div>
          </div>
          {/* Hero Message Card */}
          <div className="hero-message-card">
            <h2 className="hero-question">
              Have you or a loved one been affected by{" "}
              <span className="purple-highlight">Mesothelioma?</span>
            </h2>
            <p className="hero-description">
              As a woman, you've carried the weight of care, love, and
              resilience. Now it's time someone stands with you.
            </p>
            <ul className="hero-bullets">
              <li>Secondary Asbestos exposure is common</li>
              <li>Misdiagnosis delays are more frequent in women</li>
              <li>Women have won significant legal settlements</li>
            </ul>
          </div>
        </div>
        {/* Right Column - Claim Form */}
        <div className="right-column">
          <div className="claim-form-container">
            <div className="form-header-section">
              <h2 className="claim-form-title">Claim Form</h2>
            </div>
            {submitMessage && (
              <div
                className={`message-alert ${
                  submitMessage.includes("✅") ? "success-alert" : "error-alert"
                }`}
              >
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="main-form">
              {/* Row 1: First Name & Last Name */}
              <div className="form-row-container">
                <div className="input-container">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="First Name*"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Last Name*"
                  />
                </div>
              </div>
              {/* Row 2: Phone & Email */}
              <div className="form-row-container">
                <div className="input-container">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Phone Number*"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Email ID*"
                  />
                </div>
              </div>
              {/* Row 3: Date of Birth & Job Title */}
              <div className="form-row-container">
                <div className="input-container date-container">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="form-input date-input"
                    placeholder="Date of Birth*"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Job Title*"
                  />
                </div>
              </div>
              {/* Row 4: Date of Diagnosis & Type */}
              <div className="form-row-container">
                <div className="input-container date-container">
                  <input
                    type="date"
                    name="dateOfDiagnosis"
                    value={formData.dateOfDiagnosis}
                    onChange={handleInputChange}
                    required
                    className="form-input date-input"
                    placeholder="Date of Diagnosis*"
                  />
                </div>
                <div className="input-container select-container">
                  <select
                    name="typeOfDiagnosis"
                    value={formData.typeOfDiagnosis}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                    placeholder="Type of Diagnosis*"
                  >
                    <option value="">Type of Diagnosis</option>
                    <option value="pleural-mesothelioma">
                      Pleural Mesothelioma
                    </option>
                    <option value="peritoneal-mesothelioma">
                      Peritoneal Mesothelioma
                    </option>
                    <option value="pericardial-mesothelioma">
                      Pericardial Mesothelioma
                    </option>
                    <option value="testicular-mesothelioma">
                      Testicular Mesothelioma
                    </option>
                    <option value="other">Other</option>
                  </select>
                  <div className="dropdown-arrow"></div>
                </div>
              </div>
              {/* Story Textarea */}
              <div className="textarea-container">
                <input
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  rows={3}
                  className="form-input date-input"
                  placeholder="Tell us your story (optional)"
                />
              </div>
              {/* Checkboxes */}
              <div className="checkbox-section">
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="checkbox-input"
                  />
                  <label htmlFor="agreeToTerms" className="checkbox-label">
                    I agree to the{" "}
                    <span className="link-style">privacy policy </span> and{" "}
                    <span className="link-style">disclaimer</span> and give my
                    express written consent to be contacted regarding my case
                    options. I understand that I may be contacted using
                    automatic dialing equipment.Message and data rates may
                    apply. My consent does not require purchase. This is Legal
                    advertising.
                  </label>
                </div>
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    id="verifyHuman"
                    name="verifyHuman"
                    checked={formData.verifyHuman}
                    onChange={handleInputChange}
                    required
                    className="checkbox-input"
                  />
                  <label htmlFor="verifyHuman" className="checkbox-label">
                    Please check this box to verify you're a person.
                  </label>
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-form-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Start your claim now"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
