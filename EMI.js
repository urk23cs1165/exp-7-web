import React, { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenure) {
      alert("Please fill in all fields!");
      return;
    }
    if (loanAmount <= 0 || interestRate <= 0 || tenure <= 0) {
      alert("All values must be positive!");
      return;
    }

    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(tenure);
    const R = annualRate / 12 / 100;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emiValue * N;
    const totalInterestToPay = totalPayment - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestToPay.toFixed(2));
  };

  const styles = {
    body: {
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #a8edea, #fed6e3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    },
    container: {
      backgroundColor: "white",
      width: "400px",
      padding: "25px 30px",
      borderRadius: "15px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      color: "#333",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      fontWeight: 600,
      display: "block",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },
    result: {
      marginTop: "20px",
      backgroundColor: "#f8f8f8",
      padding: "15px",
      borderRadius: "10px",
    },
    footer: {
      marginTop: "15px",
      fontSize: "13px",
      color: "#555",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>💰 EMI Calculator</h1>

        <div style={styles.formGroup}>
          <label style={styles.label}>Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Annual Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter annual interest rate"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Loan Tenure (in months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure in months"
            style={styles.input}
          />
        </div>

        <button onClick={calculateEMI} style={styles.button}>
          Calculate EMI
        </button>

        {emi && (
          <div style={styles.result}>
            <h2>📊 Results</h2>
            <p>
              <strong>Loan Amount:</strong> ₹{loanAmount}
            </p>
            <p>
              <strong>EMI:</strong> ₹{emi}
            </p>
            <p>
              <strong>Total Interest to Pay:</strong> ₹{totalInterest}
            </p>
          </div>
        )}

        <footer style={styles.footer}>
          <p>Developed with ❤️ using React JS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

