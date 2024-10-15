import { useState } from "react";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";
import img from './SignUp.png';

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // For error handling

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Send data to backend
      const response = await fetch("https://warehouse-management-backend-qxu0.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      console.log("Form Submitted:", data);

      // If registration is successful, navigate to login
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message || "Failed to register");
    }
  };

  const stepTitles = [
    "Step 1: Account Info",
    "Step 2: Personal Info",
    "Step 3: Confirm Details",
  ];

  return (
    <div className="signup-main flex md:flex-row flex-col">
      <div className="signup-left">
        <img src={img} alt="Side Illustration" />
      </div>
      <div className="signup-right">
        <div className="signup-right-container">
          <h2>Create Your Account</h2>
          <div className="step-indicator">
            {stepTitles.map((title, index) => (
              <div
                key={index}
                className={`step-item ${
                  currentStep === index + 1 ? "active" : ""
                }`}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="form-step">
            {currentStep === 1 && (
              <Stepone
                nextStep={nextStep}
                handleChange={handleChange}
                values={formData}
              />
            )}
            {currentStep === 2 && (
              <Steptwo
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={formData}
              />
            )}
            {currentStep === 3 && (
              <Stepthree
                prevStep={prevStep}
                values={formData}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          {/* Display error message if registration fails */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
