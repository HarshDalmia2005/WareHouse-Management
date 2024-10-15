import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./SignupForm.css"; // Import the CSS for this component

const Stepone = ({ nextStep, handleChange, values }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="step-container">
      <h2 className="text-lg md:text-xl">Step 1: Account Information</h2>
      <input
        type="text"
        placeholder="Username"
        value={values.username}
        onChange={handleChange("username")}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange("email")}
        required
      />
      <div className="pass-input-signup">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={values.password}
          onChange={handleChange("password")}
          required
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle-signup"
        />
      </div>
      <div className="step-buttons">
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Stepone;
