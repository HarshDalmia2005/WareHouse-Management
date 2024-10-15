import "./SignupForm.css"; // Import the CSS for this component

const Stepthree = ({ prevStep, handleSubmit, values }) => {
  return (
    <div className="step-container">
      <h2>Step 3: Confirm Your Details</h2>
      <div className="confirmation-table-container">
        <table className="confirmation-table">
          <tbody>
            <tr>
              <td>
                <strong>Username:</strong>
              </td>
              <td>{values.username}</td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td>{values.email}</td>
            </tr>
            <tr>
              <td>
                <strong>District:</strong>
              </td>
              <td>{values.district}</td>
            </tr>
            <tr>
              <td>
                <strong>City:</strong>
              </td>
              <td>{values.city}</td>
            </tr>
            <tr>
              <td>
                <strong>State:</strong>
              </td>
              <td>{values.state}</td>
            </tr>
          </tbody>
        </table>
        <div className="step-buttons">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Stepthree;
