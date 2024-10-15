import "./SignupForm.css"; // Import the CSS for this component

const Steptwo = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className="step-container">
      <h2>Step 2: Personal Information</h2>
      <input
        type="text"
        placeholder="District"
        value={values.district}
        onChange={handleChange("district")}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={values.city}
        onChange={handleChange("city")}
        required
      />
      <input
        type="text"
        placeholder="State"
        value={values.state}
        onChange={handleChange("state")}
        required
      />
      {/* You can add more fields as needed */}
      <div className="step-buttons">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Steptwo;
