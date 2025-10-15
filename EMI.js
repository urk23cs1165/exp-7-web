import React, { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    // Validation
    if (
      loanAmount <= 0 ||
      interestRate <= 0 ||
      tenure <= 0 ||
      loanAmount === "" ||
      interestRate === "" ||
      tenure === ""
    ) {
      alert("Please enter valid positive values for all fields!");
      return;
    }

    // Convert values
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(tenure);
    const R = annualRate / 12 / 100;

    // EMI Formula
    const emiValue =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    // Total interest
    const totalPayment = emiValue * N;
    const totalInterestToPay = totalPayment - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestToPay.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2>EMI Calculator</h2>

      <div style={styles.inputContainer}>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div style={styles.inputContainer}>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
      </div>

      <div style={styles.inputContainer}>
        <label>Loan Tenure (in months):</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          placeholder="Enter tenure in months"
        />
      </div>

      <button onClick={calculateEMI} style={styles.button}>
        Calculate EMI
      </button>

      {emi && (
        <div style={styles.result}>
          <h3>Results:</h3>
          <p><strong>Loan Amount:</strong> ₹{loanAmount}</p>
          <p><strong>EMI:</strong> ₹{emi}</p>
          <p><strong>Total Interest to be Paid:</strong> ₹{totalInterest}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputContainer: {
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    backgroundColor: "#f8f8f8",
    padding: "10px",
    borderRadius: "8px",
  },
};
