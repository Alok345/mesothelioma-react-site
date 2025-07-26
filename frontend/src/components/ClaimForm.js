"use client"

import { useState } from "react"

const ClaimForm = () => {
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
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.agreeToTerms || !formData.verifyHuman) {
      setSubmitMessage("Please complete all required fields and checkboxes.")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Use relative URL since we have proxy configured
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
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage("✅ Thank you! Your claim form has been submitted successfully. We'll contact you soon.")
        // Reset form
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
        })
      } else {
        setSubmitMessage(`❌ Error: ${result.error || "Failed to submit form. Please try again."}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="claim-form">
      <div className="form-header">
        <div className="slots-badge">
          <span className="mobile-text">ONLY 6 SLOTS</span>
          <span className="desktop-text">6 SLOTS LEFT</span>
        </div>
        <h2 className="form-title">Claim Form</h2>
      </div>

      {submitMessage && (
        <div className={`submit-message ${submitMessage.includes("✅") ? "success" : "error"}`}>{submitMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              id="dateOfDiagnosis"
              name="dateOfDiagnosis"
              value={formData.dateOfDiagnosis}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="typeOfDiagnosis">Type of Diagnosis *</label>
          <select
            id="typeOfDiagnosis"
            name="typeOfDiagnosis"
            value={formData.typeOfDiagnosis}
            onChange={handleInputChange}
            required
          >
            <option value="">Select diagnosis type</option>
            <option value="pleural-mesothelioma">Pleural Mesothelioma</option>
            <option value="peritoneal-mesothelioma">Peritoneal Mesothelioma</option>
            <option value="pericardial-mesothelioma">Pericardial Mesothelioma</option>
            <option value="testicular-mesothelioma">Testicular Mesothelioma</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="story">Tell us your story (optional)</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleInputChange}
            rows={4}
            placeholder="Share your experience..."
          />
        </div>

        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agreeToTerms">
              I agree to the privacy policy and disclaimer and give my express written consent to be contacted regarding
              my case options. I understand that I may be contacted using automatic dialing equipment. Message and data
              rates may apply. My consent does not require purchase. This is Legal advertising.
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="verifyHuman"
              name="verifyHuman"
              checked={formData.verifyHuman}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="verifyHuman">Please check this box to verify you're a person.</label>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span className="mobile-text">Submit →</span>
              <span className="desktop-text">Start your claim now</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ClaimForm
